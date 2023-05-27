import {ServerError, ServerParseError} from '@apollo/client';
import {SourceLocation} from 'graphql';

export namespace APIModule {
  export type Error = {
    message?: string;
    locations?: readonly SourceLocation[] | undefined;
    path?: readonly (string | number)[] | undefined;
  };

  export type ServiceError = {
    apiErrors?: Error[];
    networkError?: Error | ServerParseError | ServerError;
  };
}
