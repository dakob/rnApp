import React from 'react';
import { Text } from 'react-native';

export default class CText extends React.Component {
        constructor(){
            super();
            this.text = '';
        }

        render() {
          return (
            <Text>{text}</Text>
        );
    }
} 