import { Grid, Button, List, TextField, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React, { useState } from 'react';
import generate from '../generator';

export interface AppProps {
  initialMenus: number
};

export const App: React.FC<AppProps> = ({ initialMenus, ...props }) => {
  const [count, setCount] = useState(initialMenus);
  const [menus, setMenus] = useState<string[]>(generate(count));

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const num: number = Number(event.target.value);
    setCount(num);
    console.log(num);
  };
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenus(generate(count));
    console.log(menus);
  };

  return (
  <div>
    <Grid container spacing={1}>
      <Grid item xs={3} alignItems="center">
        <TextField label="メニュー数" type="number"value={count} onChange={handleInput}/>
      </Grid>
      <Grid item xs={2} alignItems="center">
        <Button variant="contained" color="primary" onClick={handleClick}>生成</Button>
      </Grid>
    </Grid>
    <List>
      {menus.map((menu: string, idx: number) => (
        <ListItem>
          <ListItemIcon>{idx + 1}</ListItemIcon>
          <ListItemText>{menu}</ListItemText>
        </ListItem>
      ))}
    </List>
  </div>
)};
