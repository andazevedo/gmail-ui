import { Avatar } from "@/components/avatar"
import { Input } from "@/components/input"
import { MenuButton } from "@/components/menu-button"
import { Email } from "@/components/email"
import {View, Text, FlatList} from "react-native"
import { EMAILS } from "@/utils/emails"
import { FloatButton } from "@/components/float-button"


export default function Home(){
    return (
    <View className=" flex-1 bg-gray-900 pt-14 p-4">  
        <Input>
            <MenuButton>

            </MenuButton>
        <Input.Field placeholder="Pesquisar no e-mail" />
        <Avatar source={{ uri: "https://github.com/andazevedo.png"}}
                size="small"/>
        </Input>
        
        <FlatList data={EMAILS}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Email data={item}/>}
        ListHeaderComponent={()=>
        <Text 
            className="uppercase text-gray-400 text-sm font-subtitle mt-6">
            Entrada
        </Text>}
        contentContainerClassName= "gap-6"
        >
        </FlatList>
            <FloatButton icon="edit">
                
            </FloatButton>
    </View>
    )
}