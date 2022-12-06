import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {Modal} from 'react-native-ui-lib';

export interface FormModalProps {
  enableBlur?: boolean;
  visible: boolean;
  onClose: () => void;
  onShow?: () => void;
  title: string;
  children: React.ReactNode;
  onDone?: () => void;
  doneText?: string;
}

const isIos = Platform.OS === 'ios';

const FormModal: React.FC<FormModalProps> = ({
  enableBlur = false,
  visible,
  onClose,
  onShow,
  title,
  children,
  onDone,
  doneText = 'Save',
}) => {
  const onOperationDone = React.useCallback(() => {
    if (onDone) {
      onDone();
      onClose();
    }
  }, [onDone, onClose]);

  return (
    <Modal
      animationType={'slide'}
      transparent={isIos && enableBlur}
      enableModalBlur={isIos && enableBlur}
      visible={visible}
      onRequestClose={onClose}
      style={styles.modal}
      onShow={onShow}>
      <Modal.TopBar
        title={title}
        onCancel={onClose}
        onDone={onOperationDone}
        doneLabel={doneText}
      />
      {children}
    </Modal>
  );
};

export default FormModal;

export const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});
