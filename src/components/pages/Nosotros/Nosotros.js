import * as React from 'react';
import './Nosotros.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import wines from '../../img/wines2.jpg'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Nosotros() {
  return (
    <div className='container'> 
        <img src={wines} alt="wines" className='wines'/>
        <div className='title-container'>
            <h2 className='nosotros generalText'>Nosotros</h2>
        </div>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container justifyContent="center" spacing={2} columns={3}>
                <Grid item xs={2}>
                  <p className='textNosotros generalText'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor fringilla lorem at tincidunt. In hac habitasse platea dictumst. Vestibulum id posuere massa. Quisque maximus lorem nec sem posuere facilisis. Fusce at mi eget arcu elementum laoreet. Nulla et quam vel massa fringilla ornare quis vitae arcu. Proin nec odio eu erat vestibulum mattis. Pellentesque tellus tortor, posuere id nibh at, rutrum sollicitudin magna. Suspendisse dapibus eget dui ac molestie. Vivamus posuere lacus eget ante hendrerit, nec tempus nisl ornare.
                  Maecenas sit amet molestie dui. Nulla facilisi. Praesent congue nisl non lectus rhoncus, vel porttitor orci semper. Sed convallis tellus massa, laoreet blandit mi interdum non. Aliquam vel elit eros. Nullam in elementum libero. Donec nec diam in ante accumsan consequat. In imperdiet lorem sit amet finibus vulputate. Sed commodo tristique lorem, ac scelerisque est fringilla eget.
                  Duis erat est, cursus feugiat leo nec, mollis dapibus leo. Donec bibendum consequat nisl, in placerat elit lobortis vel. Cras leo ex, sodales a porta vitae, semper ac nunc. Proin nec odio eu ex ornare congue. Morbi mollis congue ultricies. Nunc dapibus non nulla non volutpat. Sed enim purus, auctor tristique ipsum id, semper suscipit leo. Duis nibh diam, vestibulum vitae libero vitae, tempus consequat sem. Cras gravida libero sodales, consectetur odio a, bibendum nisl. Nulla ultrices blandit orci nec porta. Sed placerat nibh sit amet posuere finibus. Morbi eget augue tempus, venenatis lectus at, vulputate tellus. Praesent vulputate nunc sit amet mi vestibulum condimentum. Mauris vitae nibh nisl. Nullam venenatis dolor eu turpis viverra efficitur. Aliquam feugiat aliquet fringilla.
                  Mauris nunc urna, rhoncus sed maximus ut, tincidunt sit amet purus. Pellentesque quam erat, tempor id nibh sollicitudin, lacinia condimentum enim. Phasellus sed placerat dolor, eget viverra nunc. In ultricies venenatis dolor, porttitor facilisis purus. In libero augue, pharetra non finibus at, dictum eu dolor. Nullam magna erat, mattis nec laoreet vitae, fringilla in quam. Aliquam luctus eget nulla nec dapibus.
                  Suspendisse eget urna eu arcu finibus pulvinar. Etiam lacinia ex enim, non luctus turpis dapibus in. Morbi accumsan eu erat eget pellentesque. Mauris non leo arcu. Nunc eget nulla commodo, condimentum quam nec, dictum nibh. Quisque aliquam, dolor sit amet porta finibus, nisl erat blandit lectus, at ultricies libero risus id massa. Fusce laoreet consectetur dui posuere convallis. Aenean neque dolor, tempor ac est non, molestie aliquet nulla. Morbi tellus urna, dignissim id vehicula quis, porttitor a lorem. Donec malesuada, turpis ut pharetra tristique, felis sem fermentum ipsum, vel viverra lorem purus et enim.
                  </p>
               </Grid>
            </Grid>
        </Box>
    </div>
  );
}