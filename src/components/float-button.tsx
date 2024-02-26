import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";

type FloatButtonProps = TouchableOpacityProps & {
    icon?: keyof typeof MaterialIcons.glyphMap
}

export function FloatButton({icon, ...rest}: FloatButtonProps) {

    return(
    
         <TouchableOpacity activeOpacity={0.7} {...rest}>
            <View  className="px-4 py-3 bg-gray-600 rounded-full absolute bottom-4 right-4 gap-1 flex-row items-center">
          {  icon && 
          <MaterialIcons name={icon} size={22} color={colors.orange[500]}/> 
          }
           <Text className="font-suntitle text-orange-500">Escrever</Text> 
            </View>             
        </TouchableOpacity>
           
       
    )
}