import {NavigationContainerRefWithCurrent} from '@react-navigation/native';
import {CharacterModule} from '../character';

export namespace NavigationModule {
  export type ParamList = {
    List: undefined;
    Character: {charter: CharacterModule.Character};
    Filter: undefined;
  };
}
