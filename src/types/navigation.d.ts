import {DrawerNavigationOptions} from "@react-navigation/drawer"
import { IconNameProps } from "@/components/drawer-button"

interface CunstomOptions extends DrawerNavigationOptions{
    iconName: IconNameProps
    isDividir?: boolean
    notifications?: number
    sectionTitle?: string
}