import { App } from 'vue'
import Button from '@z-ui/button'
import Icon from '@z-ui/icon'
import ButtonGroup from '@z-ui/button-group'
import Col from '@z-ui/col'
import Row from '@z-ui/row'
import Checkbox from '@z-ui/checkbox'
import CheckboxGroup from '@z-ui/checkbox-group'
import Message from '@z-ui/message'

const components = [
    Button,
    Icon,
    ButtonGroup,
    Col,
    Row,
    Checkbox,
    CheckboxGroup,
    Message
]

const install = (app: App)=> {
    components.forEach(component => {
        app.component(component.name, component)
    })
}

// 后面可以使用 createApp().use(xxx) 来注册组件
export default {
    install
}
