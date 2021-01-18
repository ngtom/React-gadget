import React, {useState} from 'react';
// to make the website responsive, we need to use react hook: useState
// react component:javascript function to render something
function App() {
  return(
    <div>
      <Folder name="Desktop">
        <File name="Kitty.jpeg"/>
        <File name="Meow.png" />
        <Folder name="Application">      
          <File name="blah-blah.mp4"/>
          <File name="its_my_life.mp4"/>
        </Folder>
      </Folder>
      <Folder name="Music">
        <File name="bohemian_rhapsody.mp4"/>
        <File name="presentation.pdf"/>
        <File name="thesis.pdf"/>
      </Folder>
    </div>
  );
}

// another react component
// attribute : props 
const Folder = (props) => {
  const [isOpen, setIsOpen] = useState(true)
  const {name, children} = props;
  
  const direction = isOpen ? "down" : "right"
  const handleClick = () =>{
    setIsOpen(! isOpen)
  }
  return (
    <div style={{marginLeft: '20px'}}>
      <span onClick={handleClick}>
        <i className="blue folder icon"></i>
        <i className={`caret ${direction} icon`}></i>
      </span>
      {name}
      <div style={{marginLeft: '17px'}}>
        {isOpen? children : null}
      </div>
    </div>
  );
}

const File = (props) =>{
  const {name} = props;
  const extension = name.split(".")[1];
  const fileIcons = {
    mp4: 'headphones',
    png: 'file image outline',
    jpeg: 'file image',
    pdf: 'file pdf',
  };
  return (
    <div>
      <i className={`${fileIcons[extension]} icon`}></i>
      {name}
    </div>
  );
}
export default App;
