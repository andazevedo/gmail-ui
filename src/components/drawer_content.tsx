import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { Image, ScrollView, Text, View } from "react-native";

import { DrawerButton } from "@/components/drawer-button";
import { CunstomOptions } from "@/types/navigation";

export function DrawerContent(drawerProps: DrawerContentComponentProps){
    return(
        <View className="flex-1 bg-gray-600 overflow-hidden">
            <View className="mt-20 w-full border-b pb-6 border-gray-500">
                <Image 
                  source={require("@/assets/logo.png")} 
                 className="w-28 ml-5" 
                 resizeMode="contain"
                />
        </View>
        <ScrollView 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingBottom: 42
            }}
        >
            <View className="mt-2">
                {drawerProps.state.routes.map((route, index)=>{
                    const isFosuced = drawerProps.state.index === index
                    const options = drawerProps.descriptors[route.key].options as CunstomOptions

                   if (options.title === undefined){
                        return 
                    }

                    const onPress = () => {
                        const event = drawerProps.navigation.emit({
                            type: "drawerItemPress",
                            canPreventDefault: true,
                            target: route.key
                        })

                        if(!isFosuced && !event?.defaultPrevented){
                            { 
                             drawerProps.navigation.navigate(route.name, route.params)
                            }
                         }
                    }

                    

                    return (
                    <View  key={route.key}>
                        {
                           options.sectionTitle && (
                                <Text className="text-gray-400 text-sm font-heading uppercase ml-4 mt-6">
                                    {options.sectionTitle}
                                </Text>
                            )
                        }
                          <DrawerButton
                         title={options.title}
                         iconName={options.iconName}
                         isDivider={options.isDividir}
                         isFocused={isFosuced}

                         onPress={onPress}
                         />
                    </View>
                    )
            })}
            </View>
        </ScrollView>
            
        </View>
    )
}