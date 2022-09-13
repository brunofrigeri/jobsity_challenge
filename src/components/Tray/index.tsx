import React, {forwardRef, PropsWithChildren, useCallback} from 'react';
import {
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import {View} from 'react-native';

export interface TrayProps extends PropsWithChildren {}

const Tray = forwardRef<BottomSheetModal, TrayProps>(({children}, ref) => {
  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        enableTouchThrough
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        pressBehavior="close"
      />
    ),
    [],
  );

  return (
    <View>
      <BottomSheetModal
        ref={ref}
        index={0}
        snapPoints={['25%', '50%']}
        enablePanDownToClose
        backdropComponent={renderBackdrop}>
        {children}
      </BottomSheetModal>
    </View>
  );
});

export default Tray;
