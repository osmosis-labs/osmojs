import * as t from '@babel/types';
import { ToJSONMethod } from './index';
export declare const toJSON: {
    identity(args: ToJSONMethod): t.ExpressionStatement;
    string(args: ToJSONMethod): t.ExpressionStatement;
    double(args: ToJSONMethod): t.ExpressionStatement;
    float(args: ToJSONMethod): t.ExpressionStatement;
    bool(args: ToJSONMethod): t.ExpressionStatement;
    number(args: ToJSONMethod): t.ExpressionStatement;
    int32(args: ToJSONMethod): t.ExpressionStatement;
    uint32(args: ToJSONMethod): t.ExpressionStatement;
    long(args: ToJSONMethod, defaultMethod: 'UZERO' | 'ZERO'): t.ExpressionStatement;
    int64(args: ToJSONMethod): t.ExpressionStatement;
    uint64(args: ToJSONMethod): t.ExpressionStatement;
    type(args: ToJSONMethod): t.ExpressionStatement;
    enum(args: ToJSONMethod): t.ExpressionStatement;
    bytes(args: ToJSONMethod): t.ExpressionStatement;
    duration(args: ToJSONMethod): t.ExpressionStatement;
    timestamp(args: ToJSONMethod): t.ExpressionStatement;
    keyHash(args: ToJSONMethod): (t.ExpressionStatement | t.IfStatement)[];
    array(args: ToJSONMethod, expr: t.Expression): t.IfStatement;
};
export declare const arrayTypes: {
    identity(): t.Identifier;
    string(): t.Identifier;
    double(): t.Identifier;
    float(): t.Identifier;
    bool(): t.Identifier;
    number(): t.CallExpression;
    uint32(): t.CallExpression;
    int32(): t.CallExpression;
    long(defaultMethod: 'ZERO' | 'UZERO'): t.CallExpression;
    uint64(): t.CallExpression;
    int64(): t.CallExpression;
    bytes(args: ToJSONMethod): t.CallExpression;
    enum(args: ToJSONMethod): t.CallExpression;
    type(args: ToJSONMethod): t.ConditionalExpression;
};
