import React, { ReactNode } from 'react';
import { View, Modal, ModalProps } from 'react-native';

import { styles } from './styles';

interface IModalViewProps extends ModalProps {
  children: ReactNode;
}

const ModalView = ({ children, ...rest }: IModalViewProps): JSX.Element => {
  return (
    <Modal animationType="slide" {...rest} transparent>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.bar} />
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default ModalView;
