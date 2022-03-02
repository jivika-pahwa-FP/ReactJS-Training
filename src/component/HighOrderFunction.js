function HighOrderFunction(Component){

        function HOC(){
                return (
                        <div style={{border:'2px solid grey',margin:'10px',color:'dodgerblue',padding:'10px'}}>
                        <Component />
                        </div>
                )
        }
        return HOC;
}               

function demoComponent(){
        return <h2>I am a Demo Component</h2>
}

function demoComponentAgain(){
        return <h2>I am a Demo Component Again</h2>
}

var NewComponent = HighOrderFunction(demoComponent);
var SecondComponent = HighOrderFunction(demoComponentAgain);

export {NewComponent , SecondComponent};


// use of HOC is : there is a time when we need to share a common code between components 
// like common styling or events etc..
