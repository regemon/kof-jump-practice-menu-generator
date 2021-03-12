import {
  Theme,
  createStyles,
  makeStyles,
  useTheme,
  Container,
  CardHeader,
  Card,
  CardContent,
  Button,
  TextField,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';

import React, { useState } from 'react';
import generate from '../generator';

export interface AppProps {
  initialMenus: number
};

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
    },
    header: {
      alignItems: 'center',
      paddingBottom: theme.spacing(1),
    },
    list: {
      display: 'flex',
      alignItems: 'center',
    }
  })
);

export const App: React.FC<AppProps> = ({ initialMenus, ...props }) => {
  const classes = useStyles();
  const theme = useTheme();

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
    <Container maxWidth="md" component="main" className={classes.root}>
      <Card variant="outlined">
        <CardHeader title="KOF ジャンプ練習メニュー"  className={classes.header} />
        <CardContent>
          <TextField label="メニュー数" type="number"value={count} onChange={handleInput}/>
          <Button variant="contained" color="primary" onClick={handleClick}>生成</Button>
        </CardContent>
        <CardContent className={classes.list}>
          <List>
            {menus.map((menu: string, idx: number) => (
              <ListItem key={idx}>
                <ListItemIcon>{idx + 1}</ListItemIcon>
                <ListItemText>{menu}</ListItemText>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Container>
)};
