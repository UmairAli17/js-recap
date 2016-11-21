describe("Test for js-recap", function() {
  var keyEvent;
  var searchBox;
  beforeEach(function(){
    keyEvent = new KeyboardEvent("keyup", {key : "a", char : "a", keyCode:"13", which:"13",shiftKey: true});
    Object.defineProperty(keyEvent, 'keyCode', {
        get : function() {
          return this.keyCodeVal;
        },
        set : function(keyCodeVal){
          this.keyCodeVal=keyCodeVal;
        }
    }); 
     Object.defineProperty(keyEvent, 'which', {
        get : function() {
          return this.keyCodeVal;
        },
        set : function(keyCodeVal){
          this.keyCodeVal=keyCodeVal;
        }
    });    
    searchBox=document.querySelector("#search");
    searchBox.value="";
    msg=document.querySelector("#msg");
    
  });
  it("Q1) The #search <input> element should have focus when the page loads",function(){
    expect(document.activeElement).toEqual(searchBox);
  });

  describe("The doSearch() function",function(){

    beforeEach(function(){
      $('#msg').text("");
    })

    it("Q2) should exist", function(){
      spyOn(window, 'doSearch');
      doSearch();
      expect(window.doSearch).toHaveBeenCalled();
      expect(window.doSearch.calls.count()).toEqual(1);
    });

    it("Q3) should display the error message 'You didn\'t enter anything' in the <div id='msg'> element.",function(){
      expect($('#msg').text()).toEqual("");
      doSearch({keyCode:13,which:13});
      expect($('#msg').text()).toEqual("You didn't enter anything");
    });

    it('Q4) should run on keyup, when the user types into the search box <input id="search">.',function(){
      expect($('#msg').text()).toEqual("");
      keyEvent.keyCode=13;
      searchBox.dispatchEvent(keyEvent);
      expect($('#msg').text()).toEqual("You didn't enter anything");
    });

    it("Q5) should only display the error message if the user has pressed the 'Enter' key.",function(){
      expect($('#msg').text()).toEqual("");
      keyEvent.keyCode=20;
      searchBox.dispatchEvent(keyEvent);
      expect($('#msg').text()).toEqual("");
      keyEvent.keyCode=13;
      searchBox.dispatchEvent(keyEvent);
      expect($('#msg').text()).toEqual("You didn't enter anything");
      keyEvent.keyCode=1;
      searchBox.dispatchEvent(keyEvent);
      expect($('#msg').text()).toEqual("");
    });

    it("Q6) should only display the error message if the search box is empty.",function(){
      expect($('#msg').text()).toEqual("");
      searchBox.value="qwerty";
      keyEvent.keyCode=13;
      searchBox.dispatchEvent(keyEvent);
      expect($('#msg').text()).not.toEqual("You didn't enter anything");
      searchBox.value="";
      keyEvent.keyCode=13;
      searchBox.dispatchEvent(keyEvent);
      expect($('#msg').text()).toEqual("You didn't enter anything");
      searchBox.value=" ";
      keyEvent.keyCode=13;
      searchBox.dispatchEvent(keyEvent);
      expect($('#msg').text()).toEqual("You didn't enter anything");
    });

    it("Q7) should display 'You entered the search term xyz.' when the user types 'xyz' and then hits ENTER in the <div id='msg'> element.",function(){
      searchBox.value="qwerty";
      keyEvent.keyCode=13;
      searchBox.dispatchEvent(keyEvent);
      expect($('#msg').text().search("You entered the search term qwerty.")).not.toEqual(-1);
    });
    
    it("Q8) should display films with titles that match the entered search term as <li> elements in the #film-list <ul> element.",function(){
      searchBox.value="Jaws";
      keyEvent.keyCode=13;
      searchBox.dispatchEvent(keyEvent);
      expect($('#film-list').html()).toEqual("<li>Jaws</li>");
      searchBox.value="Winter's Bone";
      keyEvent.keyCode=13;
      searchBox.dispatchEvent(keyEvent);
      expect($('#film-list').html()).toEqual("<li>Winter's Bone</li>");
    });

    it("Q9) should add an error CSS class to the <div id='msg'> element if the user hasn't entered a search term.",function(){
      expect($('#msg').text()).toEqual("");
      searchBox.value="";
      keyEvent.keyCode=13;
      searchBox.dispatchEvent(keyEvent);
      expect($('#msg').hasClass('error')).toEqual(true);
      searchBox.value="qwerty";
      keyEvent.keyCode=13;
      searchBox.dispatchEvent(keyEvent);
      expect($('#msg').hasClass('error')).toEqual(false);
      searchBox.value=" ";
      keyEvent.keyCode=13;
      searchBox.dispatchEvent(keyEvent);
      expect($('#msg').hasClass('error')).toEqual(true);
    });

    it("Q10) should be case insensitive when matching to search terms e.g. if the user enters 'jaws' they should receive 1 result.",function(){
      searchBox.value="jaws";
      keyEvent.keyCode=13;
      searchBox.dispatchEvent(keyEvent);
      expect($('#film-list').html()).toEqual("<li>Jaws</li>");
      searchBox.value="WINTER'S BONE";
      keyEvent.keyCode=13;
      searchBox.dispatchEvent(keyEvent);
      expect($('#film-list').html()).toEqual("<li>Winter's Bone</li>");
    });


    it("q11) should allow for 'fuzzy' matching e.g. if the user enters 'e' the user should receive 2 results.",function(){
      searchBox.value="ja";
      keyEvent.keyCode=13;
      searchBox.dispatchEvent(keyEvent);
      expect($('#film-list').html()).toEqual("<li>Jaws</li>");
      searchBox.value="e";
      keyEvent.keyCode=13;
      searchBox.dispatchEvent(keyEvent);
      expect($('#film-list').html()).toEqual("<li>No Country for Old Men</li><li>Winter's Bone</li><li>Back to the Future</li>");
    })

    it("Q12) should feedback the number of results. The #msg <div> element should contain the text 'You entered the search term xyz. We found x results.' when the user types a valid search term.",function(){
      searchBox.value="s";
      keyEvent.keyCode=13;
      searchBox.dispatchEvent(keyEvent);
      expect($('#msg').text()).toEqual("You entered the search term s. We found 2 results.");
      searchBox.value="Jaws";
      keyEvent.keyCode=13;
      searchBox.dispatchEvent(keyEvent);
      expect($('#msg').text()).toEqual("You entered the search term Jaws. We found 1 result.");
      searchBox.value="xyz";
      keyEvent.keyCode=13;
      searchBox.dispatchEvent(keyEvent);
      expect($('#msg').text()).toEqual("You entered the search term xyz. We found 0 results.");
    });
  });
});