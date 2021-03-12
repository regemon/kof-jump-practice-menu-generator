import { Typography, Grid, Button, TextField, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
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
  };
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenus(generate(count));
  };

  return (
  <div>
    <Typography variant="subtitle1" gutterBottom>
      KOF ジャンプ練習メニュージェネレーター
    </Typography>
    <Grid container spacing={1} alignItems="center">
      <Grid item xs={1}>
        <TextField label="メニュー数" type="number"value={count} onChange={handleInput}/>
      </Grid>
      <Grid item xs={1}>
        <Button variant="contained" color="primary" onClick={handleClick}>生成</Button>
      </Grid>
    </Grid>
    <Grid container alignItems="center">
      <Grid item xs>
        <List>
          {menus.map((menu: string, idx: number) => (
            <ListItem>
              <ListItemIcon>{idx + 1}</ListItemIcon>
              <ListItemText>{menu}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  </div>
)};
