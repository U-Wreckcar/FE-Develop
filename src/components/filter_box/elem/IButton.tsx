import React from 'react';
import styles from './item_input.module.css';

interface PropsType {
  item?: string;
}
export const IButton: React.FC<PropsType> = ({ item }) => {
  return <button>{item}</button>;
};
