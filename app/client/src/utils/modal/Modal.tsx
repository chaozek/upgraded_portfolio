import {


  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

export default function BasicModal({
  children,
  onOpen,
  isOpen,
  onClose,
  submitForm,
  isSubmitting,
}) {
  return (
    <>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Component Text</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            <Button
              background="#6565FD"
              color="white"
              _hover={{ backgroundColor: "#1B1B42" }}
              mr={3}
              onClick={() => {
                onClose();
                submitForm();
              }}
            >
              Edit
            </Button>
            <Button
              onClick={() => {
                onClose();
              }}
              variant="ghost"
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
