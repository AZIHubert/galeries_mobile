import * as React from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  View,
} from 'react-native';

import AppText from '#components/AppText';
import theme from '#helpers/theme';

interface FieldI {
  editable: boolean;
  error: string | undefined;
  label?: string;
  multiline?: boolean;
  onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onChangeText: (text: string) => void;
  requiredField?: boolean;
  secureTextEntry?: boolean;
  touched: boolean | undefined;
  value: string;
}

interface StyleSheetI {
  error: string | undefined;
  touched: boolean | undefined;
}

const Field = ({
  editable,
  error,
  label,
  multiline = false,
  onBlur,
  onChangeText,
  requiredField = false,
  secureTextEntry = false,
  touched,
  value,
}: FieldI) => (
  <View>
    <View>
      {label && (
        <View
          style={styles({
            error,
            touched,
          }).labelContainer}
        >
          <AppText
            fontSize={theme.field.label.fontSize}
          >
            {label}
          </AppText>
          {requiredField ? (
            <AppText
              color='error'
              fontSize={theme.field.label.fontSize}
            >
              { ' *' }
            </AppText>
          ) : null}
        </View>
      )}
    </View>
    <TextInput
      editable={editable}
      multiline={multiline}
      numberOfLines={multiline ? 10 : 1}
      onBlur={onBlur}
      onChangeText={onChangeText}
      style={styles({
        error,
        touched,
      }).textInput}
      secureTextEntry={secureTextEntry}
      value={value}
    />
    {error && touched ? (
      <View
        style={styles({
          error,
          touched,
        }).errorContainer}
      >
        <AppText
          fontSize={15}
          color='error'
        >
          {error}
        </AppText>
      </View>
    ) : null}
  </View>
);

const styles = ({
  error,
  touched,
}: StyleSheetI) => StyleSheet.create({
  errorContainer: {
    marginBottom: error ? (2 * theme.field.textInput.marginBottom) / 3 : 0,
  },
  labelContainer: {
    flexDirection: 'row',
  },
  textInput: {
    backgroundColor: theme.color.white,
    borderColor: error && touched ? theme.color.danger : theme.color.primary,
    borderWidth: 1,
    fontSize: theme.field.textInput.fontSize,
    marginBottom: error
      ? theme.field.textInput.marginBottom / 3
      : theme.field.textInput.marginBottom,
    marginTop: theme.field.textInput.marginTop,
    paddingHorizontal: theme.field.textInput.paddingHorizontal,
    paddingVertical: theme.field.textInput.paddingVertical,
    textAlignVertical: 'top',
    width: '100%',
  },
});

export default Field;
