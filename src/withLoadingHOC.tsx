import type { ComponentType } from 'react';
import { ToDo } from './App';
import { Loader } from './Loader';

type Props = {
  todos: ToDo[];
};

export function withLoading(WrappedComponent : ComponentType<Props>) {
    return  function ComponentWithLoading(
        {todos, isLoading}: Props & { isLoading: boolean}
    ) {
        if (isLoading) {
            return <Loader />
        }

        return <WrappedComponent todos={todos} />;
    }
}
