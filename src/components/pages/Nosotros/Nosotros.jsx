import * as React from 'react';
import './Nosotros.css';
import nosotros from '../../img/nosotros3.jpg'


export default function Nosotros() {

  return (
    <div className='container'>
      <div>
        <div className='containerImage'>
          <img src={nosotros} alt='Equus Wines' />
        </div>
        <div className='textNosotros generalText'>
            <h3 className='title'> Somos Equus</h3>
            <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor fringilla lorem at tincidunt. In hac habitasse platea dictumst. Vestibulum id posuere massa. Quisque maximus lorem nec sem posuere facilisis. Fusce at mi eget arcu elementum laoreet. Nulla et quam vel massa fringilla ornare quis vitae arcu. Proin nec odio eu erat vestibulum mattis. Pellentesque tellus tortor, posuere id nibh at, rutrum sollicitudin magna. Suspendisse dapibus eget dui ac molestie. Vivamus posuere lacus eget ante hendrerit, nec tempus nisl ornare.
              Maecenas sit amet molestie dui. Nulla facilisi. Praesent congue nisl non lectus rhoncus, vel porttitor orci semper. Sed convallis tellus massa, laoreet blandit mi interdum non. Aliquam vel elit eros. Nullam in elementum libero. Donec nec diam in ante accumsan consequat. In imperdiet lorem sit amet finibus vulputate. Sed commodo tristique lorem, ac scelerisque est fringilla eget.
              Duis erat est, cursus feugiat leo nec, mollis dapibus leo. Donec bibendum consequat nisl, in placerat elit lobortis vel. Cras leo ex, sodales a porta vitae, semper ac nunc. Proin nec odio eu ex ornare congue. Morbi mollis congue ultricies. Nunc dapibus non nulla non volutpat. Sed enim purus, auctor tristique ipsum id, semper suscipit leo. Duis nibh diam, vestibulum vitae libero vitae, tempus consequat sem. Cras gravida libero sodales, consectetur odio a, bibendum nisl. Nulla ultrices blandit orci nec porta. Sed placerat nibh sit amet posuere finibus. Morbi eget augue tempus, venenatis lectus at, vulputate tellus. Praesent vulputate nunc sit amet mi vestibulum condimentum. Mauris vitae nibh nisl. Nullam venenatis dolor eu turpis viverra efficitur. Aliquam feugiat aliquet fringilla.
              Mauris nunc urna, rhoncus sed maximus ut, tincidunt sit amet purus. Pellentesque quam erat, tempor id nibh sollicitudin, lacinia condimentum enim. Phasellus sed placerat dolor, eget viverra nunc. In ultricies venenatis dolor, porttitor facilisis purus. In libero augue, pharetra non finibus at, dictum eu dolor. Nullam magna erat, mattis nec laoreet vitae, fringilla in quam. Aliquam luctus eget nulla nec dapibus.
            </p>
            </div>
        </div>
      </div>
    </div>
  );
}