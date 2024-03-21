import { createStackNavigator } from '@react-navigation/stack';

const StackNavigation = () => {
  const Stack = createStackNavigator<CommonType.RootStackPageList>();
};

export default StackNavigation;

export declare module CommonType {
  /**
   * StackNavigation 관리하는 화면들
   */
  export type RootStackPageList = {
    default: undefined;
    home: undefined;
    adminScreen: undefined;
  };
}
