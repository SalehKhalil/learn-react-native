import React from 'react';
import {
    TextInput,
    TextInputProps,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

interface InputProps extends TextInputProps {
    icon?: string;
    iconStyle?: {};
}

const Input: React.FC<InputProps> = ({ style, icon, iconStyle, ...props }) => {
    return (
        <View style={style}>
            {
                icon
                && <Icon
                    name={icon || ''}
                    size={20}
                    style={[
                        { color: '#FFA500', opacity: 0.7, marginRight: 10 },
                        iconStyle
                    ]}
                />
            }
            <TextInput {...props} style={{ color: '#fff' }} keyboardAppearance='dark' />
        </View>
    )
}

export default Input;
