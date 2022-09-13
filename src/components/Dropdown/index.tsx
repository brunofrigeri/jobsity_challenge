import React, {useCallback, useRef} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {colors, margins} from '../../styles';
import Text from '../Text';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import Tray from '../Tray';

export type Option = {
  key?: number;
  value?: number;
};

export interface DropdownProps {
  selectedOption?: Option;
  options: Option[];
  setOption: (option: Option) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  options = [],
  setOption,
  selectedOption,
}) => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const onOptionPress = useCallback(
    (option: Option) => {
      setOption(option);
      bottomSheetRef.current?.close();
    },
    [setOption],
  );

  return (
    <>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => bottomSheetRef.current?.present()}>
        <Text size="lg" color="white">
          Season {selectedOption?.value ?? 1}
        </Text>
        <View style={styles.iconContainer}>
          <FontAwesomeIcon size={14} icon={faChevronDown} color="white" />
        </View>
      </TouchableOpacity>
      <Tray ref={bottomSheetRef}>
        <View style={styles.bottomSheetContentContainer}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={option.key}
              onPress={() => onOptionPress(option)}
              style={[
                index !== options.length - 1 && styles.optionContainer,
                styles.optionContainerOverall,
              ]}>
              <Text size="xl" color="background">
                Season {option?.value}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </Tray>
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: margins.xssm,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.white,
  },
  iconContainer: {
    paddingLeft: margins.xsss,
  },
  bottomSheetContentContainer: {
    flex: 1,
    padding: margins.xs,
  },
  optionContainerOverall: {
    alignItems: 'center',
    paddingVertical: margins.xss,
  },
  optionContainer: {
    borderBottomWidth: 1,
  },
});

export default Dropdown;
