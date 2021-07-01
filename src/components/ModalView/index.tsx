import React, { ReactNode } from 'react';
import {
  View,
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import { styles } from './styles';

interface IModalViewProps extends ModalProps {
  children: ReactNode;
  closeModal: () => void;
}

const ModalView = ({
  children,
  closeModal,
  ...rest
}: IModalViewProps): JSX.Element => {
  return (
    <Modal animationType="slide" {...rest} transparent statusBarTranslucent>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <View style={styles.bar} />
            {children}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalView;
