class Form{
    constructor(){

    }
    display(){
        var title=createElement('h2')
        title.html("car racing game")
        title.position(450,90)
        var input=createInput("name")
        var button=createButton("play")
        input.position(450,160)
        button.position(500,200)
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value()
            var greeting=createElement("h3")
            greeting.html("Hello "+name)
            greeting.position(500,160)
        })
    }
}