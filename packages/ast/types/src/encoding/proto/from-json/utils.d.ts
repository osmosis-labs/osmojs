import * as t from '@babel/types';
import { FromJSONMethod } from './index';
export declare const fromJSON: {
    string(args: FromJSONMethod): t.ObjectProperty;
    number(args: FromJSONMethod): t.ObjectProperty;
    double(args: FromJSONMethod): t.ObjectProperty;
    float(args: FromJSONMethod): t.ObjectProperty;
    int32(args: FromJSONMethod): t.ObjectProperty;
    uint32(args: FromJSONMethod): t.ObjectProperty;
    bool(args: FromJSONMethod): t.ObjectProperty;
    long(args: FromJSONMethod, defaultMethod: 'ZERO' | 'UZERO'): t.ObjectProperty;
    int64(args: FromJSONMethod): t.ObjectProperty;
    uint64(args: FromJSONMethod): t.ObjectProperty;
    type(args: FromJSONMethod): t.ObjectProperty;
    enum(args: FromJSONMethod): t.ObjectProperty;
    bytes(args: FromJSONMethod): t.ObjectProperty;
    duration(args: FromJSONMethod): t.ObjectProperty;
    timestamp(args: FromJSONMethod): t.ObjectProperty;
    keyHash(args: FromJSONMethod): t.ObjectProperty;
    array(args: FromJSONMethod, expr: t.Expression): t.ObjectProperty;
};
export declare const arrayTypes: {
    string(): t.CallExpression;
    bool(): t.CallExpression;
    bytes(args: FromJSONMethod): t.CallExpression;
    long(): t.CallExpression;
    uint64(): t.CallExpression;
    int64(): t.CallExpression;
    number(): t.CallExpression;
    uint32(): t.CallExpression;
    int32(): t.CallExpression;
    double(): t.CallExpression;
    float(): t.CallExpression;
    enum(args: FromJSONMethod): t.CallExpression;
    type(args: FromJSONMethod): t.CallExpression;
};
