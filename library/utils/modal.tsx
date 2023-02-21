import { Button, Flex, Text } from "@mantine/core";
import { closeAllModals, openModal } from "@mantine/modals";
import { ReactNode } from "react";

interface ConfirmModalProps {
  type: "confirm";
  title: string;
  content: ReactNode;
  onClose?: () => void;
  onClickConfirm: () => void;
  onClickCancel?: () => void;
}

interface AlertModalProps {
  type: "alert";
  title: string;
  content: ReactNode;
  onClose?: () => void;
  onClickConfirm?: () => void;
  onClickCancel?: () => void;
}

type ModalProps = ConfirmModalProps | AlertModalProps;

const modal = ({ type, title, content, onClose, onClickConfirm, onClickCancel }: ModalProps) => {
  const handleClickConfirm = () => {
    if (onClickConfirm) {
      onClickConfirm();
    }
    closeAllModals();
  };

  const handleClickCancel = () => {
    if (onClickCancel) {
      onClickCancel();
    }
    closeAllModals();
  };

  openModal({
    ...(onClose && { onClose }),
    centered: true,
    withCloseButton: false,
    closeOnClickOutside: type === "alert",
    title: (
      <Text size="lg" weight="bold">
        {title}
      </Text>
    ),
    children: (
      <Flex className="whitespace-pre-wrap" direction="column" gap="md">
        <Text size="sm">{content}</Text>
        <Flex justify="flex-end" gap="md">
          {type === "confirm" && (
            <Button variant="outline" onClick={handleClickCancel}>
              취소
            </Button>
          )}
          <Button data-autofocus variant="filled" onClick={handleClickConfirm}>
            확인
          </Button>
        </Flex>
      </Flex>
    ),
  });
};

export default modal;
