import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ComponentType } from 'react';


export type TypeRootStackParamList = {
  ExpensesOverview: undefined;
  AllExpenses: undefined;
  RecentExpenses: undefined;
  ManageExpenses: {
    expenseId?: string;
  };
};
export type BottomTabParamList = {
  AllExpenses: undefined;
  RecentExpenses: undefined;
};

export type NavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabParamList>,
  NativeStackNavigationProp<TypeRootStackParamList>
>;

export interface IRoute {
  name: keyof TypeRootStackParamList;
  component: ComponentType;
}