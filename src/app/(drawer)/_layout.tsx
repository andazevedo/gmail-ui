import { DrawerContent } from "@/components/drawer_content"
import { CunstomOptions } from "@/types/navigation"
import { Drawer } from "expo-router/drawer"



export default function Drawerlayout(){
    return(
        <Drawer 
        defaultStatus="open"
        screenOptions={{
            headerShown: false,
            drawerStyle:{
                width: "75%",    
            }
        }}

        drawerContent={(props)=> <DrawerContent  {...props} />}

        >
        <Drawer.Screen 
            name="(tabs)"
            options=
            {
                {
                    title: "Todas as caixas de entrada", 
                    iconName: "all-inbox", 
                    isDividir: true, 
                    notifications: 5,
                } as CunstomOptions
            }
        />

    <Drawer.Screen 
            name="inbox"
            options=
            {
                {
                    title: "entrada", 
                    iconName: "inbox", 
                    isDividir: true, 
                    notifications: 3,
                } as CunstomOptions
            }
        />

        <Drawer.Screen 
            name="stars"
            options=
            {
                {
                    title: "Com estrela", 
                    iconName: "star-outline", 
                } as CunstomOptions
            }
            />
         <Drawer.Screen 
            name="postponed"
            options=
            {
                {
                    title: "Adiados", 
                    iconName: "schedule", 
                } as CunstomOptions
            }
            />

        <Drawer.Screen 
            name="important"
            options=
            {
                {
                    title: "Importante", 
                    iconName: "label-important-outline", 
                } as CunstomOptions
            }
            />
         <Drawer.Screen 
            name="send"
            options=
            {
                {
                    title: "Enviado", 
                    iconName: "send", 
                } as CunstomOptions
            }
            />
         <Drawer.Screen 
            name="programmed"
            options=
            {
                {
                    title: "Programado", 
                    iconName: "schedule-send", 
                } as CunstomOptions
            }
            />
        <Drawer.Screen 
            name="exit-box"
            options=
            {
                {
                    title: "Caixa de Saída", 
                    iconName: "outbox", 
                } as CunstomOptions
            }
            />
        <Drawer.Screen 
            name="sketch"
            options=
            {
                {
                    title: "Rascunho", 
                    iconName: "note", 
                } as CunstomOptions
            }
            />
         <Drawer.Screen 
            name="all-emails"
            options=
            {
                {
                    title: "todos os e-mails", 
                    iconName: "email", 
                } as CunstomOptions
            }
            />
         <Drawer.Screen 
            name="span"
            options=
            {
                {
                    title: "Spam", 
                    iconName: "info-outline", 
                } as CunstomOptions
            }
            />
         <Drawer.Screen 
            name="trash"
            options=
            {
                {
                    title: "Lixeira", 
                    iconName: "delete-outline", 
                } as CunstomOptions
            }
            />  
         <Drawer.Screen 
            name="read"
            options=
            {
                {
                    title: "Lidos", 
                    iconName: "label-important-outline", 
                    sectionTitle: "Marcadores",
                } as CunstomOptions
            }
            />
         <Drawer.Screen 
            name="general"
            options=
            {
                {
                    title: "Geral", 
                    iconName: "label-important-outline", 
                    isDividir: true,
                } as CunstomOptions
            }
            />
          <Drawer.Screen 
            name="new-marker"
            options=
            {
                {
                    title: "Criar Novo", 
                    iconName: "add", 
                    isDividir: true,
                } as CunstomOptions
            }
            />    
          <Drawer.Screen 
            name="config"
            options=
            {
                {
                    title: "Configurações", 
                    iconName: "settings", 
                } as CunstomOptions
            }
            />
          <Drawer.Screen 
            name="feedback"
            options=
            {
                {
                    title: "Feedback", 
                    iconName: "feedback", 
                } as CunstomOptions
            }
            />
          <Drawer.Screen 
            name="help"
            options=
            {
                {
                    title: "Ajuda", 
                    iconName: "help-outline", 
                } as CunstomOptions
            }
            />                                  
        </Drawer>

    )
}