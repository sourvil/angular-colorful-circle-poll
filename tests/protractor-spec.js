describe('colorful-circle-poll', function() {

  it('should add a subject', function(){
    browser.get('http://localhost:3000');

    element(by.name('name')).sendKeys('NodeJS');
    element(by.name('btnSubmit')).click();
    element(by.name('name')).sendKeys('Express');
    element(by.name('btnSubmit')).click();

    var subjectList = element.all(by.repeater('subject in subjectList'));

    expect(subjectList.count()).toEqual(2);
    expect(subjectList.get(0).getText()).toEqual('NodeJS 1');
    expect(subjectList.get(1).getText()).toEqual('Express 1');


    console.log("OK should add a subject");

  });
});

describe('colorful-circle-poll-title', function() {

  it('should have a title', function(){
    browser.get('http://localhost:3000');

    expect(browser.getTitle()).toEqual('Hizmet içi Eğitim Demo');

    console.log("OK should have a title");

  });
});

