
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>
/**
 * Model InstitutionProfile
 * 
 */
export type InstitutionProfile = $Result.DefaultSelection<Prisma.$InstitutionProfilePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserProfiles
 * const userProfiles = await prisma.userProfile.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more UserProfiles
   * const userProfiles = await prisma.userProfile.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs>;

  /**
   * `prisma.institutionProfile`: Exposes CRUD operations for the **InstitutionProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InstitutionProfiles
    * const institutionProfiles = await prisma.institutionProfile.findMany()
    * ```
    */
  get institutionProfile(): Prisma.InstitutionProfileDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.3.1
   * Query Engine version: 61e140623197a131c2a6189271ffee05a7aa9a59
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    UserProfile: 'UserProfile',
    InstitutionProfile: 'InstitutionProfile'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'userProfile' | 'institutionProfile'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>,
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      InstitutionProfile: {
        payload: Prisma.$InstitutionProfilePayload<ExtArgs>
        fields: Prisma.InstitutionProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstitutionProfileFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InstitutionProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstitutionProfileFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InstitutionProfilePayload>
          }
          findFirst: {
            args: Prisma.InstitutionProfileFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InstitutionProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstitutionProfileFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InstitutionProfilePayload>
          }
          findMany: {
            args: Prisma.InstitutionProfileFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InstitutionProfilePayload>[]
          }
          create: {
            args: Prisma.InstitutionProfileCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InstitutionProfilePayload>
          }
          createMany: {
            args: Prisma.InstitutionProfileCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.InstitutionProfileDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InstitutionProfilePayload>
          }
          update: {
            args: Prisma.InstitutionProfileUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InstitutionProfilePayload>
          }
          deleteMany: {
            args: Prisma.InstitutionProfileDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.InstitutionProfileUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.InstitutionProfileUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InstitutionProfilePayload>
          }
          aggregate: {
            args: Prisma.InstitutionProfileAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInstitutionProfile>
          }
          groupBy: {
            args: Prisma.InstitutionProfileGroupByArgs<ExtArgs>,
            result: $Utils.Optional<InstitutionProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstitutionProfileCountArgs<ExtArgs>,
            result: $Utils.Optional<InstitutionProfileCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileAvgAggregateOutputType = {
    id: number | null
  }

  export type UserProfileSumAggregateOutputType = {
    id: number | null
  }

  export type UserProfileMinAggregateOutputType = {
    id: number | null
    Name: string | null
    Email: string | null
    Program: string | null
  }

  export type UserProfileMaxAggregateOutputType = {
    id: number | null
    Name: string | null
    Email: string | null
    Program: string | null
  }

  export type UserProfileCountAggregateOutputType = {
    id: number
    Name: number
    Email: number
    Program: number
    _all: number
  }


  export type UserProfileAvgAggregateInputType = {
    id?: true
  }

  export type UserProfileSumAggregateInputType = {
    id?: true
  }

  export type UserProfileMinAggregateInputType = {
    id?: true
    Name?: true
    Email?: true
    Program?: true
  }

  export type UserProfileMaxAggregateInputType = {
    id?: true
    Name?: true
    Email?: true
    Program?: true
  }

  export type UserProfileCountAggregateInputType = {
    id?: true
    Name?: true
    Email?: true
    Program?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _avg?: UserProfileAvgAggregateInputType
    _sum?: UserProfileSumAggregateInputType
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    id: number
    Name: string
    Email: string
    Program: string
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Name?: boolean
    Email?: boolean
    Program?: boolean
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    id?: boolean
    Name?: boolean
    Email?: boolean
    Program?: boolean
  }


  export type $UserProfilePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: number
      Name: string
      Email: string
      Program: string
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }


  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserProfileFindManyArgs, 'select' | 'include'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserProfileFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserProfile that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserProfileFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserProfileFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
    **/
    create<T extends UserProfileCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserProfiles.
     *     @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     *     @example
     *     // Create many UserProfiles
     *     const userProfile = await prisma.userProfile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserProfileCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
    **/
    delete<T extends UserProfileDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserProfileUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserProfileDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserProfileUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
    **/
    upsert<T extends UserProfileUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserProfile model
   */ 
  interface UserProfileFieldRefs {
    readonly id: FieldRef<"UserProfile", 'Int'>
    readonly Name: FieldRef<"UserProfile", 'String'>
    readonly Email: FieldRef<"UserProfile", 'String'>
    readonly Program: FieldRef<"UserProfile", 'String'>
  }
    

  // Custom InputTypes

  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }


  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }


  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }


  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }


  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }


  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }


  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }


  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
  }


  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }


  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }


  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
  }


  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
  }



  /**
   * Model InstitutionProfile
   */

  export type AggregateInstitutionProfile = {
    _count: InstitutionProfileCountAggregateOutputType | null
    _avg: InstitutionProfileAvgAggregateOutputType | null
    _sum: InstitutionProfileSumAggregateOutputType | null
    _min: InstitutionProfileMinAggregateOutputType | null
    _max: InstitutionProfileMaxAggregateOutputType | null
  }

  export type InstitutionProfileAvgAggregateOutputType = {
    id: number | null
  }

  export type InstitutionProfileSumAggregateOutputType = {
    id: number | null
  }

  export type InstitutionProfileMinAggregateOutputType = {
    id: number | null
    institutionName: string | null
    institutionEmail: string | null
    Programs: string | null
    Facilitator: string | null
    Username: string | null
    Password: string | null
    DateOfRegistration: Date | null
  }

  export type InstitutionProfileMaxAggregateOutputType = {
    id: number | null
    institutionName: string | null
    institutionEmail: string | null
    Programs: string | null
    Facilitator: string | null
    Username: string | null
    Password: string | null
    DateOfRegistration: Date | null
  }

  export type InstitutionProfileCountAggregateOutputType = {
    id: number
    institutionName: number
    institutionEmail: number
    Programs: number
    Facilitator: number
    Username: number
    Password: number
    DateOfRegistration: number
    _all: number
  }


  export type InstitutionProfileAvgAggregateInputType = {
    id?: true
  }

  export type InstitutionProfileSumAggregateInputType = {
    id?: true
  }

  export type InstitutionProfileMinAggregateInputType = {
    id?: true
    institutionName?: true
    institutionEmail?: true
    Programs?: true
    Facilitator?: true
    Username?: true
    Password?: true
    DateOfRegistration?: true
  }

  export type InstitutionProfileMaxAggregateInputType = {
    id?: true
    institutionName?: true
    institutionEmail?: true
    Programs?: true
    Facilitator?: true
    Username?: true
    Password?: true
    DateOfRegistration?: true
  }

  export type InstitutionProfileCountAggregateInputType = {
    id?: true
    institutionName?: true
    institutionEmail?: true
    Programs?: true
    Facilitator?: true
    Username?: true
    Password?: true
    DateOfRegistration?: true
    _all?: true
  }

  export type InstitutionProfileAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstitutionProfile to aggregate.
     */
    where?: InstitutionProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstitutionProfiles to fetch.
     */
    orderBy?: InstitutionProfileOrderByWithRelationInput | InstitutionProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstitutionProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstitutionProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstitutionProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InstitutionProfiles
    **/
    _count?: true | InstitutionProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstitutionProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstitutionProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstitutionProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstitutionProfileMaxAggregateInputType
  }

  export type GetInstitutionProfileAggregateType<T extends InstitutionProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateInstitutionProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstitutionProfile[P]>
      : GetScalarType<T[P], AggregateInstitutionProfile[P]>
  }




  export type InstitutionProfileGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: InstitutionProfileWhereInput
    orderBy?: InstitutionProfileOrderByWithAggregationInput | InstitutionProfileOrderByWithAggregationInput[]
    by: InstitutionProfileScalarFieldEnum[] | InstitutionProfileScalarFieldEnum
    having?: InstitutionProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstitutionProfileCountAggregateInputType | true
    _avg?: InstitutionProfileAvgAggregateInputType
    _sum?: InstitutionProfileSumAggregateInputType
    _min?: InstitutionProfileMinAggregateInputType
    _max?: InstitutionProfileMaxAggregateInputType
  }

  export type InstitutionProfileGroupByOutputType = {
    id: number
    institutionName: string
    institutionEmail: string
    Programs: string
    Facilitator: string
    Username: string
    Password: string
    DateOfRegistration: Date
    _count: InstitutionProfileCountAggregateOutputType | null
    _avg: InstitutionProfileAvgAggregateOutputType | null
    _sum: InstitutionProfileSumAggregateOutputType | null
    _min: InstitutionProfileMinAggregateOutputType | null
    _max: InstitutionProfileMaxAggregateOutputType | null
  }

  type GetInstitutionProfileGroupByPayload<T extends InstitutionProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstitutionProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstitutionProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstitutionProfileGroupByOutputType[P]>
            : GetScalarType<T[P], InstitutionProfileGroupByOutputType[P]>
        }
      >
    >


  export type InstitutionProfileSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    institutionName?: boolean
    institutionEmail?: boolean
    Programs?: boolean
    Facilitator?: boolean
    Username?: boolean
    Password?: boolean
    DateOfRegistration?: boolean
  }, ExtArgs["result"]["institutionProfile"]>

  export type InstitutionProfileSelectScalar = {
    id?: boolean
    institutionName?: boolean
    institutionEmail?: boolean
    Programs?: boolean
    Facilitator?: boolean
    Username?: boolean
    Password?: boolean
    DateOfRegistration?: boolean
  }


  export type $InstitutionProfilePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "InstitutionProfile"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: number
      institutionName: string
      institutionEmail: string
      Programs: string
      Facilitator: string
      Username: string
      Password: string
      DateOfRegistration: Date
    }, ExtArgs["result"]["institutionProfile"]>
    composites: {}
  }


  type InstitutionProfileGetPayload<S extends boolean | null | undefined | InstitutionProfileDefaultArgs> = $Result.GetResult<Prisma.$InstitutionProfilePayload, S>

  type InstitutionProfileCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<InstitutionProfileFindManyArgs, 'select' | 'include'> & {
      select?: InstitutionProfileCountAggregateInputType | true
    }

  export interface InstitutionProfileDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InstitutionProfile'], meta: { name: 'InstitutionProfile' } }
    /**
     * Find zero or one InstitutionProfile that matches the filter.
     * @param {InstitutionProfileFindUniqueArgs} args - Arguments to find a InstitutionProfile
     * @example
     * // Get one InstitutionProfile
     * const institutionProfile = await prisma.institutionProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InstitutionProfileFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, InstitutionProfileFindUniqueArgs<ExtArgs>>
    ): Prisma__InstitutionProfileClient<$Result.GetResult<Prisma.$InstitutionProfilePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one InstitutionProfile that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {InstitutionProfileFindUniqueOrThrowArgs} args - Arguments to find a InstitutionProfile
     * @example
     * // Get one InstitutionProfile
     * const institutionProfile = await prisma.institutionProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InstitutionProfileFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InstitutionProfileFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__InstitutionProfileClient<$Result.GetResult<Prisma.$InstitutionProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first InstitutionProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionProfileFindFirstArgs} args - Arguments to find a InstitutionProfile
     * @example
     * // Get one InstitutionProfile
     * const institutionProfile = await prisma.institutionProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InstitutionProfileFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, InstitutionProfileFindFirstArgs<ExtArgs>>
    ): Prisma__InstitutionProfileClient<$Result.GetResult<Prisma.$InstitutionProfilePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first InstitutionProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionProfileFindFirstOrThrowArgs} args - Arguments to find a InstitutionProfile
     * @example
     * // Get one InstitutionProfile
     * const institutionProfile = await prisma.institutionProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InstitutionProfileFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InstitutionProfileFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__InstitutionProfileClient<$Result.GetResult<Prisma.$InstitutionProfilePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more InstitutionProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionProfileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InstitutionProfiles
     * const institutionProfiles = await prisma.institutionProfile.findMany()
     * 
     * // Get first 10 InstitutionProfiles
     * const institutionProfiles = await prisma.institutionProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const institutionProfileWithIdOnly = await prisma.institutionProfile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InstitutionProfileFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InstitutionProfileFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionProfilePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a InstitutionProfile.
     * @param {InstitutionProfileCreateArgs} args - Arguments to create a InstitutionProfile.
     * @example
     * // Create one InstitutionProfile
     * const InstitutionProfile = await prisma.institutionProfile.create({
     *   data: {
     *     // ... data to create a InstitutionProfile
     *   }
     * })
     * 
    **/
    create<T extends InstitutionProfileCreateArgs<ExtArgs>>(
      args: SelectSubset<T, InstitutionProfileCreateArgs<ExtArgs>>
    ): Prisma__InstitutionProfileClient<$Result.GetResult<Prisma.$InstitutionProfilePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many InstitutionProfiles.
     *     @param {InstitutionProfileCreateManyArgs} args - Arguments to create many InstitutionProfiles.
     *     @example
     *     // Create many InstitutionProfiles
     *     const institutionProfile = await prisma.institutionProfile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InstitutionProfileCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InstitutionProfileCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InstitutionProfile.
     * @param {InstitutionProfileDeleteArgs} args - Arguments to delete one InstitutionProfile.
     * @example
     * // Delete one InstitutionProfile
     * const InstitutionProfile = await prisma.institutionProfile.delete({
     *   where: {
     *     // ... filter to delete one InstitutionProfile
     *   }
     * })
     * 
    **/
    delete<T extends InstitutionProfileDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, InstitutionProfileDeleteArgs<ExtArgs>>
    ): Prisma__InstitutionProfileClient<$Result.GetResult<Prisma.$InstitutionProfilePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one InstitutionProfile.
     * @param {InstitutionProfileUpdateArgs} args - Arguments to update one InstitutionProfile.
     * @example
     * // Update one InstitutionProfile
     * const institutionProfile = await prisma.institutionProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InstitutionProfileUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, InstitutionProfileUpdateArgs<ExtArgs>>
    ): Prisma__InstitutionProfileClient<$Result.GetResult<Prisma.$InstitutionProfilePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more InstitutionProfiles.
     * @param {InstitutionProfileDeleteManyArgs} args - Arguments to filter InstitutionProfiles to delete.
     * @example
     * // Delete a few InstitutionProfiles
     * const { count } = await prisma.institutionProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InstitutionProfileDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InstitutionProfileDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstitutionProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InstitutionProfiles
     * const institutionProfile = await prisma.institutionProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InstitutionProfileUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, InstitutionProfileUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InstitutionProfile.
     * @param {InstitutionProfileUpsertArgs} args - Arguments to update or create a InstitutionProfile.
     * @example
     * // Update or create a InstitutionProfile
     * const institutionProfile = await prisma.institutionProfile.upsert({
     *   create: {
     *     // ... data to create a InstitutionProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InstitutionProfile we want to update
     *   }
     * })
    **/
    upsert<T extends InstitutionProfileUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, InstitutionProfileUpsertArgs<ExtArgs>>
    ): Prisma__InstitutionProfileClient<$Result.GetResult<Prisma.$InstitutionProfilePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of InstitutionProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionProfileCountArgs} args - Arguments to filter InstitutionProfiles to count.
     * @example
     * // Count the number of InstitutionProfiles
     * const count = await prisma.institutionProfile.count({
     *   where: {
     *     // ... the filter for the InstitutionProfiles we want to count
     *   }
     * })
    **/
    count<T extends InstitutionProfileCountArgs>(
      args?: Subset<T, InstitutionProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstitutionProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InstitutionProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InstitutionProfileAggregateArgs>(args: Subset<T, InstitutionProfileAggregateArgs>): Prisma.PrismaPromise<GetInstitutionProfileAggregateType<T>>

    /**
     * Group by InstitutionProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InstitutionProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstitutionProfileGroupByArgs['orderBy'] }
        : { orderBy?: InstitutionProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InstitutionProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstitutionProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InstitutionProfile model
   */
  readonly fields: InstitutionProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InstitutionProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstitutionProfileClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the InstitutionProfile model
   */ 
  interface InstitutionProfileFieldRefs {
    readonly id: FieldRef<"InstitutionProfile", 'Int'>
    readonly institutionName: FieldRef<"InstitutionProfile", 'String'>
    readonly institutionEmail: FieldRef<"InstitutionProfile", 'String'>
    readonly Programs: FieldRef<"InstitutionProfile", 'String'>
    readonly Facilitator: FieldRef<"InstitutionProfile", 'String'>
    readonly Username: FieldRef<"InstitutionProfile", 'String'>
    readonly Password: FieldRef<"InstitutionProfile", 'String'>
    readonly DateOfRegistration: FieldRef<"InstitutionProfile", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * InstitutionProfile findUnique
   */
  export type InstitutionProfileFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionProfile
     */
    select?: InstitutionProfileSelect<ExtArgs> | null
    /**
     * Filter, which InstitutionProfile to fetch.
     */
    where: InstitutionProfileWhereUniqueInput
  }


  /**
   * InstitutionProfile findUniqueOrThrow
   */
  export type InstitutionProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionProfile
     */
    select?: InstitutionProfileSelect<ExtArgs> | null
    /**
     * Filter, which InstitutionProfile to fetch.
     */
    where: InstitutionProfileWhereUniqueInput
  }


  /**
   * InstitutionProfile findFirst
   */
  export type InstitutionProfileFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionProfile
     */
    select?: InstitutionProfileSelect<ExtArgs> | null
    /**
     * Filter, which InstitutionProfile to fetch.
     */
    where?: InstitutionProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstitutionProfiles to fetch.
     */
    orderBy?: InstitutionProfileOrderByWithRelationInput | InstitutionProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstitutionProfiles.
     */
    cursor?: InstitutionProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstitutionProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstitutionProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstitutionProfiles.
     */
    distinct?: InstitutionProfileScalarFieldEnum | InstitutionProfileScalarFieldEnum[]
  }


  /**
   * InstitutionProfile findFirstOrThrow
   */
  export type InstitutionProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionProfile
     */
    select?: InstitutionProfileSelect<ExtArgs> | null
    /**
     * Filter, which InstitutionProfile to fetch.
     */
    where?: InstitutionProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstitutionProfiles to fetch.
     */
    orderBy?: InstitutionProfileOrderByWithRelationInput | InstitutionProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstitutionProfiles.
     */
    cursor?: InstitutionProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstitutionProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstitutionProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstitutionProfiles.
     */
    distinct?: InstitutionProfileScalarFieldEnum | InstitutionProfileScalarFieldEnum[]
  }


  /**
   * InstitutionProfile findMany
   */
  export type InstitutionProfileFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionProfile
     */
    select?: InstitutionProfileSelect<ExtArgs> | null
    /**
     * Filter, which InstitutionProfiles to fetch.
     */
    where?: InstitutionProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstitutionProfiles to fetch.
     */
    orderBy?: InstitutionProfileOrderByWithRelationInput | InstitutionProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InstitutionProfiles.
     */
    cursor?: InstitutionProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstitutionProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstitutionProfiles.
     */
    skip?: number
    distinct?: InstitutionProfileScalarFieldEnum | InstitutionProfileScalarFieldEnum[]
  }


  /**
   * InstitutionProfile create
   */
  export type InstitutionProfileCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionProfile
     */
    select?: InstitutionProfileSelect<ExtArgs> | null
    /**
     * The data needed to create a InstitutionProfile.
     */
    data: XOR<InstitutionProfileCreateInput, InstitutionProfileUncheckedCreateInput>
  }


  /**
   * InstitutionProfile createMany
   */
  export type InstitutionProfileCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InstitutionProfiles.
     */
    data: InstitutionProfileCreateManyInput | InstitutionProfileCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * InstitutionProfile update
   */
  export type InstitutionProfileUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionProfile
     */
    select?: InstitutionProfileSelect<ExtArgs> | null
    /**
     * The data needed to update a InstitutionProfile.
     */
    data: XOR<InstitutionProfileUpdateInput, InstitutionProfileUncheckedUpdateInput>
    /**
     * Choose, which InstitutionProfile to update.
     */
    where: InstitutionProfileWhereUniqueInput
  }


  /**
   * InstitutionProfile updateMany
   */
  export type InstitutionProfileUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InstitutionProfiles.
     */
    data: XOR<InstitutionProfileUpdateManyMutationInput, InstitutionProfileUncheckedUpdateManyInput>
    /**
     * Filter which InstitutionProfiles to update
     */
    where?: InstitutionProfileWhereInput
  }


  /**
   * InstitutionProfile upsert
   */
  export type InstitutionProfileUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionProfile
     */
    select?: InstitutionProfileSelect<ExtArgs> | null
    /**
     * The filter to search for the InstitutionProfile to update in case it exists.
     */
    where: InstitutionProfileWhereUniqueInput
    /**
     * In case the InstitutionProfile found by the `where` argument doesn't exist, create a new InstitutionProfile with this data.
     */
    create: XOR<InstitutionProfileCreateInput, InstitutionProfileUncheckedCreateInput>
    /**
     * In case the InstitutionProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstitutionProfileUpdateInput, InstitutionProfileUncheckedUpdateInput>
  }


  /**
   * InstitutionProfile delete
   */
  export type InstitutionProfileDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionProfile
     */
    select?: InstitutionProfileSelect<ExtArgs> | null
    /**
     * Filter which InstitutionProfile to delete.
     */
    where: InstitutionProfileWhereUniqueInput
  }


  /**
   * InstitutionProfile deleteMany
   */
  export type InstitutionProfileDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstitutionProfiles to delete
     */
    where?: InstitutionProfileWhereInput
  }


  /**
   * InstitutionProfile without action
   */
  export type InstitutionProfileDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionProfile
     */
    select?: InstitutionProfileSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserProfileScalarFieldEnum: {
    id: 'id',
    Name: 'Name',
    Email: 'Email',
    Program: 'Program'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const InstitutionProfileScalarFieldEnum: {
    id: 'id',
    institutionName: 'institutionName',
    institutionEmail: 'institutionEmail',
    Programs: 'Programs',
    Facilitator: 'Facilitator',
    Username: 'Username',
    Password: 'Password',
    DateOfRegistration: 'DateOfRegistration'
  };

  export type InstitutionProfileScalarFieldEnum = (typeof InstitutionProfileScalarFieldEnum)[keyof typeof InstitutionProfileScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    id?: IntFilter<"UserProfile"> | number
    Name?: StringFilter<"UserProfile"> | string
    Email?: StringFilter<"UserProfile"> | string
    Program?: StringFilter<"UserProfile"> | string
  }

  export type UserProfileOrderByWithRelationInput = {
    id?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    Program?: SortOrder
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    Email?: string
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    Name?: StringFilter<"UserProfile"> | string
    Program?: StringFilter<"UserProfile"> | string
  }, "id" | "Email">

  export type UserProfileOrderByWithAggregationInput = {
    id?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    Program?: SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _avg?: UserProfileAvgOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
    _sum?: UserProfileSumOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserProfile"> | number
    Name?: StringWithAggregatesFilter<"UserProfile"> | string
    Email?: StringWithAggregatesFilter<"UserProfile"> | string
    Program?: StringWithAggregatesFilter<"UserProfile"> | string
  }

  export type InstitutionProfileWhereInput = {
    AND?: InstitutionProfileWhereInput | InstitutionProfileWhereInput[]
    OR?: InstitutionProfileWhereInput[]
    NOT?: InstitutionProfileWhereInput | InstitutionProfileWhereInput[]
    id?: IntFilter<"InstitutionProfile"> | number
    institutionName?: StringFilter<"InstitutionProfile"> | string
    institutionEmail?: StringFilter<"InstitutionProfile"> | string
    Programs?: StringFilter<"InstitutionProfile"> | string
    Facilitator?: StringFilter<"InstitutionProfile"> | string
    Username?: StringFilter<"InstitutionProfile"> | string
    Password?: StringFilter<"InstitutionProfile"> | string
    DateOfRegistration?: DateTimeFilter<"InstitutionProfile"> | Date | string
  }

  export type InstitutionProfileOrderByWithRelationInput = {
    id?: SortOrder
    institutionName?: SortOrder
    institutionEmail?: SortOrder
    Programs?: SortOrder
    Facilitator?: SortOrder
    Username?: SortOrder
    Password?: SortOrder
    DateOfRegistration?: SortOrder
  }

  export type InstitutionProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    institutionEmail?: string
    AND?: InstitutionProfileWhereInput | InstitutionProfileWhereInput[]
    OR?: InstitutionProfileWhereInput[]
    NOT?: InstitutionProfileWhereInput | InstitutionProfileWhereInput[]
    institutionName?: StringFilter<"InstitutionProfile"> | string
    Programs?: StringFilter<"InstitutionProfile"> | string
    Facilitator?: StringFilter<"InstitutionProfile"> | string
    Username?: StringFilter<"InstitutionProfile"> | string
    Password?: StringFilter<"InstitutionProfile"> | string
    DateOfRegistration?: DateTimeFilter<"InstitutionProfile"> | Date | string
  }, "id" | "institutionEmail">

  export type InstitutionProfileOrderByWithAggregationInput = {
    id?: SortOrder
    institutionName?: SortOrder
    institutionEmail?: SortOrder
    Programs?: SortOrder
    Facilitator?: SortOrder
    Username?: SortOrder
    Password?: SortOrder
    DateOfRegistration?: SortOrder
    _count?: InstitutionProfileCountOrderByAggregateInput
    _avg?: InstitutionProfileAvgOrderByAggregateInput
    _max?: InstitutionProfileMaxOrderByAggregateInput
    _min?: InstitutionProfileMinOrderByAggregateInput
    _sum?: InstitutionProfileSumOrderByAggregateInput
  }

  export type InstitutionProfileScalarWhereWithAggregatesInput = {
    AND?: InstitutionProfileScalarWhereWithAggregatesInput | InstitutionProfileScalarWhereWithAggregatesInput[]
    OR?: InstitutionProfileScalarWhereWithAggregatesInput[]
    NOT?: InstitutionProfileScalarWhereWithAggregatesInput | InstitutionProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InstitutionProfile"> | number
    institutionName?: StringWithAggregatesFilter<"InstitutionProfile"> | string
    institutionEmail?: StringWithAggregatesFilter<"InstitutionProfile"> | string
    Programs?: StringWithAggregatesFilter<"InstitutionProfile"> | string
    Facilitator?: StringWithAggregatesFilter<"InstitutionProfile"> | string
    Username?: StringWithAggregatesFilter<"InstitutionProfile"> | string
    Password?: StringWithAggregatesFilter<"InstitutionProfile"> | string
    DateOfRegistration?: DateTimeWithAggregatesFilter<"InstitutionProfile"> | Date | string
  }

  export type UserProfileCreateInput = {
    Name: string
    Email: string
    Program: string
  }

  export type UserProfileUncheckedCreateInput = {
    id?: number
    Name: string
    Email: string
    Program: string
  }

  export type UserProfileUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Program?: StringFieldUpdateOperationsInput | string
  }

  export type UserProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Program?: StringFieldUpdateOperationsInput | string
  }

  export type UserProfileCreateManyInput = {
    id?: number
    Name: string
    Email: string
    Program: string
  }

  export type UserProfileUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Program?: StringFieldUpdateOperationsInput | string
  }

  export type UserProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Program?: StringFieldUpdateOperationsInput | string
  }

  export type InstitutionProfileCreateInput = {
    institutionName: string
    institutionEmail: string
    Programs: string
    Facilitator: string
    Username: string
    Password: string
    DateOfRegistration?: Date | string
  }

  export type InstitutionProfileUncheckedCreateInput = {
    id?: number
    institutionName: string
    institutionEmail: string
    Programs: string
    Facilitator: string
    Username: string
    Password: string
    DateOfRegistration?: Date | string
  }

  export type InstitutionProfileUpdateInput = {
    institutionName?: StringFieldUpdateOperationsInput | string
    institutionEmail?: StringFieldUpdateOperationsInput | string
    Programs?: StringFieldUpdateOperationsInput | string
    Facilitator?: StringFieldUpdateOperationsInput | string
    Username?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    DateOfRegistration?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstitutionProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    institutionName?: StringFieldUpdateOperationsInput | string
    institutionEmail?: StringFieldUpdateOperationsInput | string
    Programs?: StringFieldUpdateOperationsInput | string
    Facilitator?: StringFieldUpdateOperationsInput | string
    Username?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    DateOfRegistration?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstitutionProfileCreateManyInput = {
    id?: number
    institutionName: string
    institutionEmail: string
    Programs: string
    Facilitator: string
    Username: string
    Password: string
    DateOfRegistration?: Date | string
  }

  export type InstitutionProfileUpdateManyMutationInput = {
    institutionName?: StringFieldUpdateOperationsInput | string
    institutionEmail?: StringFieldUpdateOperationsInput | string
    Programs?: StringFieldUpdateOperationsInput | string
    Facilitator?: StringFieldUpdateOperationsInput | string
    Username?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    DateOfRegistration?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstitutionProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    institutionName?: StringFieldUpdateOperationsInput | string
    institutionEmail?: StringFieldUpdateOperationsInput | string
    Programs?: StringFieldUpdateOperationsInput | string
    Facilitator?: StringFieldUpdateOperationsInput | string
    Username?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    DateOfRegistration?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserProfileCountOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    Program?: SortOrder
  }

  export type UserProfileAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    Program?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    Program?: SortOrder
  }

  export type UserProfileSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type InstitutionProfileCountOrderByAggregateInput = {
    id?: SortOrder
    institutionName?: SortOrder
    institutionEmail?: SortOrder
    Programs?: SortOrder
    Facilitator?: SortOrder
    Username?: SortOrder
    Password?: SortOrder
    DateOfRegistration?: SortOrder
  }

  export type InstitutionProfileAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InstitutionProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    institutionName?: SortOrder
    institutionEmail?: SortOrder
    Programs?: SortOrder
    Facilitator?: SortOrder
    Username?: SortOrder
    Password?: SortOrder
    DateOfRegistration?: SortOrder
  }

  export type InstitutionProfileMinOrderByAggregateInput = {
    id?: SortOrder
    institutionName?: SortOrder
    institutionEmail?: SortOrder
    Programs?: SortOrder
    Facilitator?: SortOrder
    Username?: SortOrder
    Password?: SortOrder
    DateOfRegistration?: SortOrder
  }

  export type InstitutionProfileSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserProfileDefaultArgs instead
     */
    export type UserProfileArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InstitutionProfileDefaultArgs instead
     */
    export type InstitutionProfileArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = InstitutionProfileDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}