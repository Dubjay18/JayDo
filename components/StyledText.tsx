import Colors from "../constants/Colors";
import { Text, TextProps } from "./Themed";

export function MonoText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: "SpaceMono" }]}
    />
  );
}
export function PoppinsText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[
        props.style,
        { fontFamily: "Poppins", color: Colors.dark.text },
      ]}
    />
  );
}
export function PoppinsBoldText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: "PoppinsBold" }]}
    />
  );
}
