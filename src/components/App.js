import React from 'react';
import { getGiphs } from '../services/giphy-api';


export default function App() {
  getGiphs();
  return <h1>Hello World</h1>;
}
