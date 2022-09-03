import React from 'react';
import s from './ActionButtonRow.module.scss';

interface Props {
  children: React.ReactNode[];
}

export default function ActionButtonRow(props: Props) {
  const { children } = props;

  return <div className={`${s.row}`}>{children}</div>;
}