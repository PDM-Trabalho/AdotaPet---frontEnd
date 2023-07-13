import { SelectList } from 'react-native-dropdown-select-list'
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from 'styled-components';
import { useState } from "react";

interface SelectProps {
  title: string,
  data: any,
  placeholder: string,
  setValue: Function
}

export default function Select ({ data, title, placeholder, setValue }: SelectProps) {
  // const [selected, setSelected] = useState("");

  const theme: any = useTheme();
  const colorIcon = theme.color.primary_300;

  const [fsColor, setFsColor] = useState(theme.color.primary_dark);
  const [bgColor, setBgColor] = useState("transparent");
  const [statusSelect, setStatusSelect] = useState(false);

  const changeColor = () => {
    setStatusSelect(!statusSelect);
    const colors = theme.color;
    
    setBgColor(statusSelect ? colors.primary_200 : "transparent");
    setFsColor(statusSelect ? colors.white : colors.primary_dark);
    console.log("oi")
  }

  return (
    <SelectList 
        data={data} 
        save="value"
        label={title}
        search={false}
        setSelected={setValue}
        placeholder={placeholder}
        fontFamily={theme.font.primary_400}
        arrowicon={<Ionicons name="chevron-down-sharp" size={22} color={colorIcon} />}
        boxStyles={{
          borderColor: theme.color.primary_200,
          backgroundColor: bgColor,
          borderWidth: 2,
          height: 56,
          alignItems: "center",
        }}
        dropdownStyles={{
          borderColor: theme.color.primary_200,
          borderWidth: 2,
        }}
        dropdownTextStyles={{
          color: theme.color.primary_dark,
        }}
        inputStyles={{
          color: fsColor,
        }}
    />
  )

};