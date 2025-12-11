
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model EmailOtp
 * 
 */
export type EmailOtp = $Result.DefaultSelection<Prisma.$EmailOtpPayload>
/**
 * Model Friendship
 * 
 */
export type Friendship = $Result.DefaultSelection<Prisma.$FriendshipPayload>
/**
 * Model Match
 * 
 */
export type Match = $Result.DefaultSelection<Prisma.$MatchPayload>
/**
 * Model Board
 * 
 */
export type Board = $Result.DefaultSelection<Prisma.$BoardPayload>
/**
 * Model Move
 * 
 */
export type Move = $Result.DefaultSelection<Prisma.$MovePayload>
/**
 * Model UserStats
 * 
 */
export type UserStats = $Result.DefaultSelection<Prisma.$UserStatsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const FriendshipStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  BLOCKED: 'BLOCKED'
};

export type FriendshipStatus = (typeof FriendshipStatus)[keyof typeof FriendshipStatus]


export const MatchStatus: {
  INVITED: 'INVITED',
  BOARD_SETUP: 'BOARD_SETUP',
  IN_PROGRESS: 'IN_PROGRESS',
  FINISHED: 'FINISHED',
  CANCELLED: 'CANCELLED'
};

export type MatchStatus = (typeof MatchStatus)[keyof typeof MatchStatus]

}

export type FriendshipStatus = $Enums.FriendshipStatus

export const FriendshipStatus: typeof $Enums.FriendshipStatus

export type MatchStatus = $Enums.MatchStatus

export const MatchStatus: typeof $Enums.MatchStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailOtp`: Exposes CRUD operations for the **EmailOtp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailOtps
    * const emailOtps = await prisma.emailOtp.findMany()
    * ```
    */
  get emailOtp(): Prisma.EmailOtpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.friendship`: Exposes CRUD operations for the **Friendship** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Friendships
    * const friendships = await prisma.friendship.findMany()
    * ```
    */
  get friendship(): Prisma.FriendshipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.match`: Exposes CRUD operations for the **Match** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matches
    * const matches = await prisma.match.findMany()
    * ```
    */
  get match(): Prisma.MatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.board`: Exposes CRUD operations for the **Board** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Boards
    * const boards = await prisma.board.findMany()
    * ```
    */
  get board(): Prisma.BoardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.move`: Exposes CRUD operations for the **Move** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Moves
    * const moves = await prisma.move.findMany()
    * ```
    */
  get move(): Prisma.MoveDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userStats`: Exposes CRUD operations for the **UserStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserStats
    * const userStats = await prisma.userStats.findMany()
    * ```
    */
  get userStats(): Prisma.UserStatsDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Session: 'Session',
    EmailOtp: 'EmailOtp',
    Friendship: 'Friendship',
    Match: 'Match',
    Board: 'Board',
    Move: 'Move',
    UserStats: 'UserStats'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "emailOtp" | "friendship" | "match" | "board" | "move" | "userStats"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      EmailOtp: {
        payload: Prisma.$EmailOtpPayload<ExtArgs>
        fields: Prisma.EmailOtpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailOtpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailOtpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailOtpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailOtpPayload>
          }
          findFirst: {
            args: Prisma.EmailOtpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailOtpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailOtpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailOtpPayload>
          }
          findMany: {
            args: Prisma.EmailOtpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailOtpPayload>[]
          }
          create: {
            args: Prisma.EmailOtpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailOtpPayload>
          }
          createMany: {
            args: Prisma.EmailOtpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailOtpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailOtpPayload>[]
          }
          delete: {
            args: Prisma.EmailOtpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailOtpPayload>
          }
          update: {
            args: Prisma.EmailOtpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailOtpPayload>
          }
          deleteMany: {
            args: Prisma.EmailOtpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailOtpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailOtpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailOtpPayload>[]
          }
          upsert: {
            args: Prisma.EmailOtpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailOtpPayload>
          }
          aggregate: {
            args: Prisma.EmailOtpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailOtp>
          }
          groupBy: {
            args: Prisma.EmailOtpGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailOtpGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailOtpCountArgs<ExtArgs>
            result: $Utils.Optional<EmailOtpCountAggregateOutputType> | number
          }
        }
      }
      Friendship: {
        payload: Prisma.$FriendshipPayload<ExtArgs>
        fields: Prisma.FriendshipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FriendshipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FriendshipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          findFirst: {
            args: Prisma.FriendshipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FriendshipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          findMany: {
            args: Prisma.FriendshipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>[]
          }
          create: {
            args: Prisma.FriendshipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          createMany: {
            args: Prisma.FriendshipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FriendshipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>[]
          }
          delete: {
            args: Prisma.FriendshipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          update: {
            args: Prisma.FriendshipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          deleteMany: {
            args: Prisma.FriendshipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FriendshipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FriendshipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>[]
          }
          upsert: {
            args: Prisma.FriendshipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          aggregate: {
            args: Prisma.FriendshipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFriendship>
          }
          groupBy: {
            args: Prisma.FriendshipGroupByArgs<ExtArgs>
            result: $Utils.Optional<FriendshipGroupByOutputType>[]
          }
          count: {
            args: Prisma.FriendshipCountArgs<ExtArgs>
            result: $Utils.Optional<FriendshipCountAggregateOutputType> | number
          }
        }
      }
      Match: {
        payload: Prisma.$MatchPayload<ExtArgs>
        fields: Prisma.MatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findFirst: {
            args: Prisma.MatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findMany: {
            args: Prisma.MatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          create: {
            args: Prisma.MatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          createMany: {
            args: Prisma.MatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          delete: {
            args: Prisma.MatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          update: {
            args: Prisma.MatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          deleteMany: {
            args: Prisma.MatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          upsert: {
            args: Prisma.MatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          aggregate: {
            args: Prisma.MatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatch>
          }
          groupBy: {
            args: Prisma.MatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchCountArgs<ExtArgs>
            result: $Utils.Optional<MatchCountAggregateOutputType> | number
          }
        }
      }
      Board: {
        payload: Prisma.$BoardPayload<ExtArgs>
        fields: Prisma.BoardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BoardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BoardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          findFirst: {
            args: Prisma.BoardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BoardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          findMany: {
            args: Prisma.BoardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>[]
          }
          create: {
            args: Prisma.BoardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          createMany: {
            args: Prisma.BoardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BoardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>[]
          }
          delete: {
            args: Prisma.BoardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          update: {
            args: Prisma.BoardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          deleteMany: {
            args: Prisma.BoardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BoardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BoardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>[]
          }
          upsert: {
            args: Prisma.BoardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          aggregate: {
            args: Prisma.BoardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBoard>
          }
          groupBy: {
            args: Prisma.BoardGroupByArgs<ExtArgs>
            result: $Utils.Optional<BoardGroupByOutputType>[]
          }
          count: {
            args: Prisma.BoardCountArgs<ExtArgs>
            result: $Utils.Optional<BoardCountAggregateOutputType> | number
          }
        }
      }
      Move: {
        payload: Prisma.$MovePayload<ExtArgs>
        fields: Prisma.MoveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MoveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MoveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload>
          }
          findFirst: {
            args: Prisma.MoveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MoveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload>
          }
          findMany: {
            args: Prisma.MoveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload>[]
          }
          create: {
            args: Prisma.MoveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload>
          }
          createMany: {
            args: Prisma.MoveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MoveCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload>[]
          }
          delete: {
            args: Prisma.MoveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload>
          }
          update: {
            args: Prisma.MoveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload>
          }
          deleteMany: {
            args: Prisma.MoveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MoveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MoveUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload>[]
          }
          upsert: {
            args: Prisma.MoveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload>
          }
          aggregate: {
            args: Prisma.MoveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMove>
          }
          groupBy: {
            args: Prisma.MoveGroupByArgs<ExtArgs>
            result: $Utils.Optional<MoveGroupByOutputType>[]
          }
          count: {
            args: Prisma.MoveCountArgs<ExtArgs>
            result: $Utils.Optional<MoveCountAggregateOutputType> | number
          }
        }
      }
      UserStats: {
        payload: Prisma.$UserStatsPayload<ExtArgs>
        fields: Prisma.UserStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          findFirst: {
            args: Prisma.UserStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          findMany: {
            args: Prisma.UserStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>[]
          }
          create: {
            args: Prisma.UserStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          createMany: {
            args: Prisma.UserStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>[]
          }
          delete: {
            args: Prisma.UserStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          update: {
            args: Prisma.UserStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          deleteMany: {
            args: Prisma.UserStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>[]
          }
          upsert: {
            args: Prisma.UserStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          aggregate: {
            args: Prisma.UserStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserStats>
          }
          groupBy: {
            args: Prisma.UserStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserStatsCountArgs<ExtArgs>
            result: $Utils.Optional<UserStatsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    emailOtp?: EmailOtpOmit
    friendship?: FriendshipOmit
    match?: MatchOmit
    board?: BoardOmit
    move?: MoveOmit
    userStats?: UserStatsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    otpCodes: number
    requestedFriendships: number
    receivedFriendships: number
    matchesAsPlayer1: number
    matchesAsPlayer2: number
    matchesAsCurrentTurn: number
    matchesWon: number
    boards: number
    moves: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    otpCodes?: boolean | UserCountOutputTypeCountOtpCodesArgs
    requestedFriendships?: boolean | UserCountOutputTypeCountRequestedFriendshipsArgs
    receivedFriendships?: boolean | UserCountOutputTypeCountReceivedFriendshipsArgs
    matchesAsPlayer1?: boolean | UserCountOutputTypeCountMatchesAsPlayer1Args
    matchesAsPlayer2?: boolean | UserCountOutputTypeCountMatchesAsPlayer2Args
    matchesAsCurrentTurn?: boolean | UserCountOutputTypeCountMatchesAsCurrentTurnArgs
    matchesWon?: boolean | UserCountOutputTypeCountMatchesWonArgs
    boards?: boolean | UserCountOutputTypeCountBoardsArgs
    moves?: boolean | UserCountOutputTypeCountMovesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOtpCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailOtpWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRequestedFriendshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedFriendshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchesAsPlayer1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchesAsPlayer2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchesAsCurrentTurnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchesWonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBoardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoardWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMovesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoveWhereInput
  }


  /**
   * Count Type MatchCountOutputType
   */

  export type MatchCountOutputType = {
    boards: number
    moves: number
  }

  export type MatchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boards?: boolean | MatchCountOutputTypeCountBoardsArgs
    moves?: boolean | MatchCountOutputTypeCountMovesArgs
  }

  // Custom InputTypes
  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchCountOutputType
     */
    select?: MatchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeCountBoardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoardWhereInput
  }

  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeCountMovesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoveWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    displayName: string | null
    image: string | null
    avatarUrl: string | null
    emailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    lastOnlineAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    displayName: string | null
    image: string | null
    avatarUrl: string | null
    emailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    lastOnlineAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    name: number
    displayName: number
    image: number
    avatarUrl: number
    emailVerified: number
    createdAt: number
    updatedAt: number
    lastOnlineAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    displayName?: true
    image?: true
    avatarUrl?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
    lastOnlineAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    displayName?: true
    image?: true
    avatarUrl?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
    lastOnlineAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    displayName?: true
    image?: true
    avatarUrl?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
    lastOnlineAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    name: string
    displayName: string | null
    image: string | null
    avatarUrl: string | null
    emailVerified: boolean
    createdAt: Date
    updatedAt: Date
    lastOnlineAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    displayName?: boolean
    image?: boolean
    avatarUrl?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastOnlineAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    otpCodes?: boolean | User$otpCodesArgs<ExtArgs>
    requestedFriendships?: boolean | User$requestedFriendshipsArgs<ExtArgs>
    receivedFriendships?: boolean | User$receivedFriendshipsArgs<ExtArgs>
    matchesAsPlayer1?: boolean | User$matchesAsPlayer1Args<ExtArgs>
    matchesAsPlayer2?: boolean | User$matchesAsPlayer2Args<ExtArgs>
    matchesAsCurrentTurn?: boolean | User$matchesAsCurrentTurnArgs<ExtArgs>
    matchesWon?: boolean | User$matchesWonArgs<ExtArgs>
    boards?: boolean | User$boardsArgs<ExtArgs>
    moves?: boolean | User$movesArgs<ExtArgs>
    userStats?: boolean | User$userStatsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    displayName?: boolean
    image?: boolean
    avatarUrl?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastOnlineAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    displayName?: boolean
    image?: boolean
    avatarUrl?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastOnlineAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    displayName?: boolean
    image?: boolean
    avatarUrl?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastOnlineAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "name" | "displayName" | "image" | "avatarUrl" | "emailVerified" | "createdAt" | "updatedAt" | "lastOnlineAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    otpCodes?: boolean | User$otpCodesArgs<ExtArgs>
    requestedFriendships?: boolean | User$requestedFriendshipsArgs<ExtArgs>
    receivedFriendships?: boolean | User$receivedFriendshipsArgs<ExtArgs>
    matchesAsPlayer1?: boolean | User$matchesAsPlayer1Args<ExtArgs>
    matchesAsPlayer2?: boolean | User$matchesAsPlayer2Args<ExtArgs>
    matchesAsCurrentTurn?: boolean | User$matchesAsCurrentTurnArgs<ExtArgs>
    matchesWon?: boolean | User$matchesWonArgs<ExtArgs>
    boards?: boolean | User$boardsArgs<ExtArgs>
    moves?: boolean | User$movesArgs<ExtArgs>
    userStats?: boolean | User$userStatsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      otpCodes: Prisma.$EmailOtpPayload<ExtArgs>[]
      requestedFriendships: Prisma.$FriendshipPayload<ExtArgs>[]
      receivedFriendships: Prisma.$FriendshipPayload<ExtArgs>[]
      matchesAsPlayer1: Prisma.$MatchPayload<ExtArgs>[]
      matchesAsPlayer2: Prisma.$MatchPayload<ExtArgs>[]
      matchesAsCurrentTurn: Prisma.$MatchPayload<ExtArgs>[]
      matchesWon: Prisma.$MatchPayload<ExtArgs>[]
      boards: Prisma.$BoardPayload<ExtArgs>[]
      moves: Prisma.$MovePayload<ExtArgs>[]
      userStats: Prisma.$UserStatsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      name: string
      displayName: string | null
      image: string | null
      avatarUrl: string | null
      emailVerified: boolean
      createdAt: Date
      updatedAt: Date
      lastOnlineAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    otpCodes<T extends User$otpCodesArgs<ExtArgs> = {}>(args?: Subset<T, User$otpCodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailOtpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    requestedFriendships<T extends User$requestedFriendshipsArgs<ExtArgs> = {}>(args?: Subset<T, User$requestedFriendshipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedFriendships<T extends User$receivedFriendshipsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedFriendshipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matchesAsPlayer1<T extends User$matchesAsPlayer1Args<ExtArgs> = {}>(args?: Subset<T, User$matchesAsPlayer1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matchesAsPlayer2<T extends User$matchesAsPlayer2Args<ExtArgs> = {}>(args?: Subset<T, User$matchesAsPlayer2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matchesAsCurrentTurn<T extends User$matchesAsCurrentTurnArgs<ExtArgs> = {}>(args?: Subset<T, User$matchesAsCurrentTurnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matchesWon<T extends User$matchesWonArgs<ExtArgs> = {}>(args?: Subset<T, User$matchesWonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    boards<T extends User$boardsArgs<ExtArgs> = {}>(args?: Subset<T, User$boardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    moves<T extends User$movesArgs<ExtArgs> = {}>(args?: Subset<T, User$movesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userStats<T extends User$userStatsArgs<ExtArgs> = {}>(args?: Subset<T, User$userStatsArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly lastOnlineAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.otpCodes
   */
  export type User$otpCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailOtp
     */
    select?: EmailOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailOtp
     */
    omit?: EmailOtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailOtpInclude<ExtArgs> | null
    where?: EmailOtpWhereInput
    orderBy?: EmailOtpOrderByWithRelationInput | EmailOtpOrderByWithRelationInput[]
    cursor?: EmailOtpWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailOtpScalarFieldEnum | EmailOtpScalarFieldEnum[]
  }

  /**
   * User.requestedFriendships
   */
  export type User$requestedFriendshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    where?: FriendshipWhereInput
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    cursor?: FriendshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * User.receivedFriendships
   */
  export type User$receivedFriendshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    where?: FriendshipWhereInput
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    cursor?: FriendshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * User.matchesAsPlayer1
   */
  export type User$matchesAsPlayer1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * User.matchesAsPlayer2
   */
  export type User$matchesAsPlayer2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * User.matchesAsCurrentTurn
   */
  export type User$matchesAsCurrentTurnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * User.matchesWon
   */
  export type User$matchesWonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * User.boards
   */
  export type User$boardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    where?: BoardWhereInput
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    cursor?: BoardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * User.moves
   */
  export type User$movesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    where?: MoveWhereInput
    orderBy?: MoveOrderByWithRelationInput | MoveOrderByWithRelationInput[]
    cursor?: MoveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoveScalarFieldEnum | MoveScalarFieldEnum[]
  }

  /**
   * User.userStats
   */
  export type User$userStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    where?: UserStatsWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    token: string
    userId: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "userId" | "expiresAt" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      userId: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly token: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model EmailOtp
   */

  export type AggregateEmailOtp = {
    _count: EmailOtpCountAggregateOutputType | null
    _min: EmailOtpMinAggregateOutputType | null
    _max: EmailOtpMaxAggregateOutputType | null
  }

  export type EmailOtpMinAggregateOutputType = {
    id: string | null
    userId: string | null
    codeHash: string | null
    purpose: string | null
    expiresAt: Date | null
    consumedAt: Date | null
    createdAt: Date | null
  }

  export type EmailOtpMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    codeHash: string | null
    purpose: string | null
    expiresAt: Date | null
    consumedAt: Date | null
    createdAt: Date | null
  }

  export type EmailOtpCountAggregateOutputType = {
    id: number
    userId: number
    codeHash: number
    purpose: number
    expiresAt: number
    consumedAt: number
    createdAt: number
    _all: number
  }


  export type EmailOtpMinAggregateInputType = {
    id?: true
    userId?: true
    codeHash?: true
    purpose?: true
    expiresAt?: true
    consumedAt?: true
    createdAt?: true
  }

  export type EmailOtpMaxAggregateInputType = {
    id?: true
    userId?: true
    codeHash?: true
    purpose?: true
    expiresAt?: true
    consumedAt?: true
    createdAt?: true
  }

  export type EmailOtpCountAggregateInputType = {
    id?: true
    userId?: true
    codeHash?: true
    purpose?: true
    expiresAt?: true
    consumedAt?: true
    createdAt?: true
    _all?: true
  }

  export type EmailOtpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailOtp to aggregate.
     */
    where?: EmailOtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailOtps to fetch.
     */
    orderBy?: EmailOtpOrderByWithRelationInput | EmailOtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailOtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailOtps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailOtps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailOtps
    **/
    _count?: true | EmailOtpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailOtpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailOtpMaxAggregateInputType
  }

  export type GetEmailOtpAggregateType<T extends EmailOtpAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailOtp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailOtp[P]>
      : GetScalarType<T[P], AggregateEmailOtp[P]>
  }




  export type EmailOtpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailOtpWhereInput
    orderBy?: EmailOtpOrderByWithAggregationInput | EmailOtpOrderByWithAggregationInput[]
    by: EmailOtpScalarFieldEnum[] | EmailOtpScalarFieldEnum
    having?: EmailOtpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailOtpCountAggregateInputType | true
    _min?: EmailOtpMinAggregateInputType
    _max?: EmailOtpMaxAggregateInputType
  }

  export type EmailOtpGroupByOutputType = {
    id: string
    userId: string
    codeHash: string
    purpose: string
    expiresAt: Date
    consumedAt: Date | null
    createdAt: Date
    _count: EmailOtpCountAggregateOutputType | null
    _min: EmailOtpMinAggregateOutputType | null
    _max: EmailOtpMaxAggregateOutputType | null
  }

  type GetEmailOtpGroupByPayload<T extends EmailOtpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailOtpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailOtpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailOtpGroupByOutputType[P]>
            : GetScalarType<T[P], EmailOtpGroupByOutputType[P]>
        }
      >
    >


  export type EmailOtpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    codeHash?: boolean
    purpose?: boolean
    expiresAt?: boolean
    consumedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailOtp"]>

  export type EmailOtpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    codeHash?: boolean
    purpose?: boolean
    expiresAt?: boolean
    consumedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailOtp"]>

  export type EmailOtpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    codeHash?: boolean
    purpose?: boolean
    expiresAt?: boolean
    consumedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailOtp"]>

  export type EmailOtpSelectScalar = {
    id?: boolean
    userId?: boolean
    codeHash?: boolean
    purpose?: boolean
    expiresAt?: boolean
    consumedAt?: boolean
    createdAt?: boolean
  }

  export type EmailOtpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "codeHash" | "purpose" | "expiresAt" | "consumedAt" | "createdAt", ExtArgs["result"]["emailOtp"]>
  export type EmailOtpInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmailOtpIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmailOtpIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EmailOtpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailOtp"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      codeHash: string
      purpose: string
      expiresAt: Date
      consumedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["emailOtp"]>
    composites: {}
  }

  type EmailOtpGetPayload<S extends boolean | null | undefined | EmailOtpDefaultArgs> = $Result.GetResult<Prisma.$EmailOtpPayload, S>

  type EmailOtpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailOtpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailOtpCountAggregateInputType | true
    }

  export interface EmailOtpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailOtp'], meta: { name: 'EmailOtp' } }
    /**
     * Find zero or one EmailOtp that matches the filter.
     * @param {EmailOtpFindUniqueArgs} args - Arguments to find a EmailOtp
     * @example
     * // Get one EmailOtp
     * const emailOtp = await prisma.emailOtp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailOtpFindUniqueArgs>(args: SelectSubset<T, EmailOtpFindUniqueArgs<ExtArgs>>): Prisma__EmailOtpClient<$Result.GetResult<Prisma.$EmailOtpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailOtp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailOtpFindUniqueOrThrowArgs} args - Arguments to find a EmailOtp
     * @example
     * // Get one EmailOtp
     * const emailOtp = await prisma.emailOtp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailOtpFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailOtpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailOtpClient<$Result.GetResult<Prisma.$EmailOtpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailOtp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailOtpFindFirstArgs} args - Arguments to find a EmailOtp
     * @example
     * // Get one EmailOtp
     * const emailOtp = await prisma.emailOtp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailOtpFindFirstArgs>(args?: SelectSubset<T, EmailOtpFindFirstArgs<ExtArgs>>): Prisma__EmailOtpClient<$Result.GetResult<Prisma.$EmailOtpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailOtp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailOtpFindFirstOrThrowArgs} args - Arguments to find a EmailOtp
     * @example
     * // Get one EmailOtp
     * const emailOtp = await prisma.emailOtp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailOtpFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailOtpFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailOtpClient<$Result.GetResult<Prisma.$EmailOtpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailOtps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailOtpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailOtps
     * const emailOtps = await prisma.emailOtp.findMany()
     * 
     * // Get first 10 EmailOtps
     * const emailOtps = await prisma.emailOtp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailOtpWithIdOnly = await prisma.emailOtp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailOtpFindManyArgs>(args?: SelectSubset<T, EmailOtpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailOtpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailOtp.
     * @param {EmailOtpCreateArgs} args - Arguments to create a EmailOtp.
     * @example
     * // Create one EmailOtp
     * const EmailOtp = await prisma.emailOtp.create({
     *   data: {
     *     // ... data to create a EmailOtp
     *   }
     * })
     * 
     */
    create<T extends EmailOtpCreateArgs>(args: SelectSubset<T, EmailOtpCreateArgs<ExtArgs>>): Prisma__EmailOtpClient<$Result.GetResult<Prisma.$EmailOtpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailOtps.
     * @param {EmailOtpCreateManyArgs} args - Arguments to create many EmailOtps.
     * @example
     * // Create many EmailOtps
     * const emailOtp = await prisma.emailOtp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailOtpCreateManyArgs>(args?: SelectSubset<T, EmailOtpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailOtps and returns the data saved in the database.
     * @param {EmailOtpCreateManyAndReturnArgs} args - Arguments to create many EmailOtps.
     * @example
     * // Create many EmailOtps
     * const emailOtp = await prisma.emailOtp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailOtps and only return the `id`
     * const emailOtpWithIdOnly = await prisma.emailOtp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailOtpCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailOtpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailOtpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailOtp.
     * @param {EmailOtpDeleteArgs} args - Arguments to delete one EmailOtp.
     * @example
     * // Delete one EmailOtp
     * const EmailOtp = await prisma.emailOtp.delete({
     *   where: {
     *     // ... filter to delete one EmailOtp
     *   }
     * })
     * 
     */
    delete<T extends EmailOtpDeleteArgs>(args: SelectSubset<T, EmailOtpDeleteArgs<ExtArgs>>): Prisma__EmailOtpClient<$Result.GetResult<Prisma.$EmailOtpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailOtp.
     * @param {EmailOtpUpdateArgs} args - Arguments to update one EmailOtp.
     * @example
     * // Update one EmailOtp
     * const emailOtp = await prisma.emailOtp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailOtpUpdateArgs>(args: SelectSubset<T, EmailOtpUpdateArgs<ExtArgs>>): Prisma__EmailOtpClient<$Result.GetResult<Prisma.$EmailOtpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailOtps.
     * @param {EmailOtpDeleteManyArgs} args - Arguments to filter EmailOtps to delete.
     * @example
     * // Delete a few EmailOtps
     * const { count } = await prisma.emailOtp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailOtpDeleteManyArgs>(args?: SelectSubset<T, EmailOtpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailOtps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailOtpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailOtps
     * const emailOtp = await prisma.emailOtp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailOtpUpdateManyArgs>(args: SelectSubset<T, EmailOtpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailOtps and returns the data updated in the database.
     * @param {EmailOtpUpdateManyAndReturnArgs} args - Arguments to update many EmailOtps.
     * @example
     * // Update many EmailOtps
     * const emailOtp = await prisma.emailOtp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailOtps and only return the `id`
     * const emailOtpWithIdOnly = await prisma.emailOtp.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmailOtpUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailOtpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailOtpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailOtp.
     * @param {EmailOtpUpsertArgs} args - Arguments to update or create a EmailOtp.
     * @example
     * // Update or create a EmailOtp
     * const emailOtp = await prisma.emailOtp.upsert({
     *   create: {
     *     // ... data to create a EmailOtp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailOtp we want to update
     *   }
     * })
     */
    upsert<T extends EmailOtpUpsertArgs>(args: SelectSubset<T, EmailOtpUpsertArgs<ExtArgs>>): Prisma__EmailOtpClient<$Result.GetResult<Prisma.$EmailOtpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailOtps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailOtpCountArgs} args - Arguments to filter EmailOtps to count.
     * @example
     * // Count the number of EmailOtps
     * const count = await prisma.emailOtp.count({
     *   where: {
     *     // ... the filter for the EmailOtps we want to count
     *   }
     * })
    **/
    count<T extends EmailOtpCountArgs>(
      args?: Subset<T, EmailOtpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailOtpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailOtp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailOtpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailOtpAggregateArgs>(args: Subset<T, EmailOtpAggregateArgs>): Prisma.PrismaPromise<GetEmailOtpAggregateType<T>>

    /**
     * Group by EmailOtp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailOtpGroupByArgs} args - Group by arguments.
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
      T extends EmailOtpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailOtpGroupByArgs['orderBy'] }
        : { orderBy?: EmailOtpGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmailOtpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailOtpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailOtp model
   */
  readonly fields: EmailOtpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailOtp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailOtpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmailOtp model
   */
  interface EmailOtpFieldRefs {
    readonly id: FieldRef<"EmailOtp", 'String'>
    readonly userId: FieldRef<"EmailOtp", 'String'>
    readonly codeHash: FieldRef<"EmailOtp", 'String'>
    readonly purpose: FieldRef<"EmailOtp", 'String'>
    readonly expiresAt: FieldRef<"EmailOtp", 'DateTime'>
    readonly consumedAt: FieldRef<"EmailOtp", 'DateTime'>
    readonly createdAt: FieldRef<"EmailOtp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmailOtp findUnique
   */
  export type EmailOtpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailOtp
     */
    select?: EmailOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailOtp
     */
    omit?: EmailOtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailOtpInclude<ExtArgs> | null
    /**
     * Filter, which EmailOtp to fetch.
     */
    where: EmailOtpWhereUniqueInput
  }

  /**
   * EmailOtp findUniqueOrThrow
   */
  export type EmailOtpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailOtp
     */
    select?: EmailOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailOtp
     */
    omit?: EmailOtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailOtpInclude<ExtArgs> | null
    /**
     * Filter, which EmailOtp to fetch.
     */
    where: EmailOtpWhereUniqueInput
  }

  /**
   * EmailOtp findFirst
   */
  export type EmailOtpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailOtp
     */
    select?: EmailOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailOtp
     */
    omit?: EmailOtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailOtpInclude<ExtArgs> | null
    /**
     * Filter, which EmailOtp to fetch.
     */
    where?: EmailOtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailOtps to fetch.
     */
    orderBy?: EmailOtpOrderByWithRelationInput | EmailOtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailOtps.
     */
    cursor?: EmailOtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailOtps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailOtps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailOtps.
     */
    distinct?: EmailOtpScalarFieldEnum | EmailOtpScalarFieldEnum[]
  }

  /**
   * EmailOtp findFirstOrThrow
   */
  export type EmailOtpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailOtp
     */
    select?: EmailOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailOtp
     */
    omit?: EmailOtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailOtpInclude<ExtArgs> | null
    /**
     * Filter, which EmailOtp to fetch.
     */
    where?: EmailOtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailOtps to fetch.
     */
    orderBy?: EmailOtpOrderByWithRelationInput | EmailOtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailOtps.
     */
    cursor?: EmailOtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailOtps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailOtps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailOtps.
     */
    distinct?: EmailOtpScalarFieldEnum | EmailOtpScalarFieldEnum[]
  }

  /**
   * EmailOtp findMany
   */
  export type EmailOtpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailOtp
     */
    select?: EmailOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailOtp
     */
    omit?: EmailOtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailOtpInclude<ExtArgs> | null
    /**
     * Filter, which EmailOtps to fetch.
     */
    where?: EmailOtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailOtps to fetch.
     */
    orderBy?: EmailOtpOrderByWithRelationInput | EmailOtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailOtps.
     */
    cursor?: EmailOtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailOtps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailOtps.
     */
    skip?: number
    distinct?: EmailOtpScalarFieldEnum | EmailOtpScalarFieldEnum[]
  }

  /**
   * EmailOtp create
   */
  export type EmailOtpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailOtp
     */
    select?: EmailOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailOtp
     */
    omit?: EmailOtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailOtpInclude<ExtArgs> | null
    /**
     * The data needed to create a EmailOtp.
     */
    data: XOR<EmailOtpCreateInput, EmailOtpUncheckedCreateInput>
  }

  /**
   * EmailOtp createMany
   */
  export type EmailOtpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailOtps.
     */
    data: EmailOtpCreateManyInput | EmailOtpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailOtp createManyAndReturn
   */
  export type EmailOtpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailOtp
     */
    select?: EmailOtpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailOtp
     */
    omit?: EmailOtpOmit<ExtArgs> | null
    /**
     * The data used to create many EmailOtps.
     */
    data: EmailOtpCreateManyInput | EmailOtpCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailOtpIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailOtp update
   */
  export type EmailOtpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailOtp
     */
    select?: EmailOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailOtp
     */
    omit?: EmailOtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailOtpInclude<ExtArgs> | null
    /**
     * The data needed to update a EmailOtp.
     */
    data: XOR<EmailOtpUpdateInput, EmailOtpUncheckedUpdateInput>
    /**
     * Choose, which EmailOtp to update.
     */
    where: EmailOtpWhereUniqueInput
  }

  /**
   * EmailOtp updateMany
   */
  export type EmailOtpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailOtps.
     */
    data: XOR<EmailOtpUpdateManyMutationInput, EmailOtpUncheckedUpdateManyInput>
    /**
     * Filter which EmailOtps to update
     */
    where?: EmailOtpWhereInput
    /**
     * Limit how many EmailOtps to update.
     */
    limit?: number
  }

  /**
   * EmailOtp updateManyAndReturn
   */
  export type EmailOtpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailOtp
     */
    select?: EmailOtpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailOtp
     */
    omit?: EmailOtpOmit<ExtArgs> | null
    /**
     * The data used to update EmailOtps.
     */
    data: XOR<EmailOtpUpdateManyMutationInput, EmailOtpUncheckedUpdateManyInput>
    /**
     * Filter which EmailOtps to update
     */
    where?: EmailOtpWhereInput
    /**
     * Limit how many EmailOtps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailOtpIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailOtp upsert
   */
  export type EmailOtpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailOtp
     */
    select?: EmailOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailOtp
     */
    omit?: EmailOtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailOtpInclude<ExtArgs> | null
    /**
     * The filter to search for the EmailOtp to update in case it exists.
     */
    where: EmailOtpWhereUniqueInput
    /**
     * In case the EmailOtp found by the `where` argument doesn't exist, create a new EmailOtp with this data.
     */
    create: XOR<EmailOtpCreateInput, EmailOtpUncheckedCreateInput>
    /**
     * In case the EmailOtp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailOtpUpdateInput, EmailOtpUncheckedUpdateInput>
  }

  /**
   * EmailOtp delete
   */
  export type EmailOtpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailOtp
     */
    select?: EmailOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailOtp
     */
    omit?: EmailOtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailOtpInclude<ExtArgs> | null
    /**
     * Filter which EmailOtp to delete.
     */
    where: EmailOtpWhereUniqueInput
  }

  /**
   * EmailOtp deleteMany
   */
  export type EmailOtpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailOtps to delete
     */
    where?: EmailOtpWhereInput
    /**
     * Limit how many EmailOtps to delete.
     */
    limit?: number
  }

  /**
   * EmailOtp without action
   */
  export type EmailOtpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailOtp
     */
    select?: EmailOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailOtp
     */
    omit?: EmailOtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailOtpInclude<ExtArgs> | null
  }


  /**
   * Model Friendship
   */

  export type AggregateFriendship = {
    _count: FriendshipCountAggregateOutputType | null
    _min: FriendshipMinAggregateOutputType | null
    _max: FriendshipMaxAggregateOutputType | null
  }

  export type FriendshipMinAggregateOutputType = {
    id: string | null
    requesterId: string | null
    addresseeId: string | null
    status: $Enums.FriendshipStatus | null
    createdAt: Date | null
  }

  export type FriendshipMaxAggregateOutputType = {
    id: string | null
    requesterId: string | null
    addresseeId: string | null
    status: $Enums.FriendshipStatus | null
    createdAt: Date | null
  }

  export type FriendshipCountAggregateOutputType = {
    id: number
    requesterId: number
    addresseeId: number
    status: number
    createdAt: number
    _all: number
  }


  export type FriendshipMinAggregateInputType = {
    id?: true
    requesterId?: true
    addresseeId?: true
    status?: true
    createdAt?: true
  }

  export type FriendshipMaxAggregateInputType = {
    id?: true
    requesterId?: true
    addresseeId?: true
    status?: true
    createdAt?: true
  }

  export type FriendshipCountAggregateInputType = {
    id?: true
    requesterId?: true
    addresseeId?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type FriendshipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friendship to aggregate.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Friendships
    **/
    _count?: true | FriendshipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendshipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendshipMaxAggregateInputType
  }

  export type GetFriendshipAggregateType<T extends FriendshipAggregateArgs> = {
        [P in keyof T & keyof AggregateFriendship]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriendship[P]>
      : GetScalarType<T[P], AggregateFriendship[P]>
  }




  export type FriendshipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipWhereInput
    orderBy?: FriendshipOrderByWithAggregationInput | FriendshipOrderByWithAggregationInput[]
    by: FriendshipScalarFieldEnum[] | FriendshipScalarFieldEnum
    having?: FriendshipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendshipCountAggregateInputType | true
    _min?: FriendshipMinAggregateInputType
    _max?: FriendshipMaxAggregateInputType
  }

  export type FriendshipGroupByOutputType = {
    id: string
    requesterId: string
    addresseeId: string
    status: $Enums.FriendshipStatus
    createdAt: Date
    _count: FriendshipCountAggregateOutputType | null
    _min: FriendshipMinAggregateOutputType | null
    _max: FriendshipMaxAggregateOutputType | null
  }

  type GetFriendshipGroupByPayload<T extends FriendshipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendshipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendshipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendshipGroupByOutputType[P]>
            : GetScalarType<T[P], FriendshipGroupByOutputType[P]>
        }
      >
    >


  export type FriendshipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requesterId?: boolean
    addresseeId?: boolean
    status?: boolean
    createdAt?: boolean
    requester?: boolean | UserDefaultArgs<ExtArgs>
    addressee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendship"]>

  export type FriendshipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requesterId?: boolean
    addresseeId?: boolean
    status?: boolean
    createdAt?: boolean
    requester?: boolean | UserDefaultArgs<ExtArgs>
    addressee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendship"]>

  export type FriendshipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requesterId?: boolean
    addresseeId?: boolean
    status?: boolean
    createdAt?: boolean
    requester?: boolean | UserDefaultArgs<ExtArgs>
    addressee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendship"]>

  export type FriendshipSelectScalar = {
    id?: boolean
    requesterId?: boolean
    addresseeId?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type FriendshipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requesterId" | "addresseeId" | "status" | "createdAt", ExtArgs["result"]["friendship"]>
  export type FriendshipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | UserDefaultArgs<ExtArgs>
    addressee?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendshipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | UserDefaultArgs<ExtArgs>
    addressee?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendshipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | UserDefaultArgs<ExtArgs>
    addressee?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FriendshipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Friendship"
    objects: {
      requester: Prisma.$UserPayload<ExtArgs>
      addressee: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      requesterId: string
      addresseeId: string
      status: $Enums.FriendshipStatus
      createdAt: Date
    }, ExtArgs["result"]["friendship"]>
    composites: {}
  }

  type FriendshipGetPayload<S extends boolean | null | undefined | FriendshipDefaultArgs> = $Result.GetResult<Prisma.$FriendshipPayload, S>

  type FriendshipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FriendshipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FriendshipCountAggregateInputType | true
    }

  export interface FriendshipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Friendship'], meta: { name: 'Friendship' } }
    /**
     * Find zero or one Friendship that matches the filter.
     * @param {FriendshipFindUniqueArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FriendshipFindUniqueArgs>(args: SelectSubset<T, FriendshipFindUniqueArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Friendship that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FriendshipFindUniqueOrThrowArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FriendshipFindUniqueOrThrowArgs>(args: SelectSubset<T, FriendshipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friendship that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindFirstArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FriendshipFindFirstArgs>(args?: SelectSubset<T, FriendshipFindFirstArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friendship that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindFirstOrThrowArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FriendshipFindFirstOrThrowArgs>(args?: SelectSubset<T, FriendshipFindFirstOrThrowArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Friendships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Friendships
     * const friendships = await prisma.friendship.findMany()
     * 
     * // Get first 10 Friendships
     * const friendships = await prisma.friendship.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const friendshipWithIdOnly = await prisma.friendship.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FriendshipFindManyArgs>(args?: SelectSubset<T, FriendshipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Friendship.
     * @param {FriendshipCreateArgs} args - Arguments to create a Friendship.
     * @example
     * // Create one Friendship
     * const Friendship = await prisma.friendship.create({
     *   data: {
     *     // ... data to create a Friendship
     *   }
     * })
     * 
     */
    create<T extends FriendshipCreateArgs>(args: SelectSubset<T, FriendshipCreateArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Friendships.
     * @param {FriendshipCreateManyArgs} args - Arguments to create many Friendships.
     * @example
     * // Create many Friendships
     * const friendship = await prisma.friendship.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FriendshipCreateManyArgs>(args?: SelectSubset<T, FriendshipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Friendships and returns the data saved in the database.
     * @param {FriendshipCreateManyAndReturnArgs} args - Arguments to create many Friendships.
     * @example
     * // Create many Friendships
     * const friendship = await prisma.friendship.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Friendships and only return the `id`
     * const friendshipWithIdOnly = await prisma.friendship.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FriendshipCreateManyAndReturnArgs>(args?: SelectSubset<T, FriendshipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Friendship.
     * @param {FriendshipDeleteArgs} args - Arguments to delete one Friendship.
     * @example
     * // Delete one Friendship
     * const Friendship = await prisma.friendship.delete({
     *   where: {
     *     // ... filter to delete one Friendship
     *   }
     * })
     * 
     */
    delete<T extends FriendshipDeleteArgs>(args: SelectSubset<T, FriendshipDeleteArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Friendship.
     * @param {FriendshipUpdateArgs} args - Arguments to update one Friendship.
     * @example
     * // Update one Friendship
     * const friendship = await prisma.friendship.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FriendshipUpdateArgs>(args: SelectSubset<T, FriendshipUpdateArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Friendships.
     * @param {FriendshipDeleteManyArgs} args - Arguments to filter Friendships to delete.
     * @example
     * // Delete a few Friendships
     * const { count } = await prisma.friendship.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FriendshipDeleteManyArgs>(args?: SelectSubset<T, FriendshipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Friendships
     * const friendship = await prisma.friendship.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FriendshipUpdateManyArgs>(args: SelectSubset<T, FriendshipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friendships and returns the data updated in the database.
     * @param {FriendshipUpdateManyAndReturnArgs} args - Arguments to update many Friendships.
     * @example
     * // Update many Friendships
     * const friendship = await prisma.friendship.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Friendships and only return the `id`
     * const friendshipWithIdOnly = await prisma.friendship.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FriendshipUpdateManyAndReturnArgs>(args: SelectSubset<T, FriendshipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Friendship.
     * @param {FriendshipUpsertArgs} args - Arguments to update or create a Friendship.
     * @example
     * // Update or create a Friendship
     * const friendship = await prisma.friendship.upsert({
     *   create: {
     *     // ... data to create a Friendship
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Friendship we want to update
     *   }
     * })
     */
    upsert<T extends FriendshipUpsertArgs>(args: SelectSubset<T, FriendshipUpsertArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipCountArgs} args - Arguments to filter Friendships to count.
     * @example
     * // Count the number of Friendships
     * const count = await prisma.friendship.count({
     *   where: {
     *     // ... the filter for the Friendships we want to count
     *   }
     * })
    **/
    count<T extends FriendshipCountArgs>(
      args?: Subset<T, FriendshipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendshipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Friendship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FriendshipAggregateArgs>(args: Subset<T, FriendshipAggregateArgs>): Prisma.PrismaPromise<GetFriendshipAggregateType<T>>

    /**
     * Group by Friendship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipGroupByArgs} args - Group by arguments.
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
      T extends FriendshipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendshipGroupByArgs['orderBy'] }
        : { orderBy?: FriendshipGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FriendshipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendshipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Friendship model
   */
  readonly fields: FriendshipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Friendship.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FriendshipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requester<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    addressee<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Friendship model
   */
  interface FriendshipFieldRefs {
    readonly id: FieldRef<"Friendship", 'String'>
    readonly requesterId: FieldRef<"Friendship", 'String'>
    readonly addresseeId: FieldRef<"Friendship", 'String'>
    readonly status: FieldRef<"Friendship", 'FriendshipStatus'>
    readonly createdAt: FieldRef<"Friendship", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Friendship findUnique
   */
  export type FriendshipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship findUniqueOrThrow
   */
  export type FriendshipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship findFirst
   */
  export type FriendshipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friendships.
     */
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * Friendship findFirstOrThrow
   */
  export type FriendshipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friendships.
     */
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * Friendship findMany
   */
  export type FriendshipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendships to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * Friendship create
   */
  export type FriendshipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * The data needed to create a Friendship.
     */
    data: XOR<FriendshipCreateInput, FriendshipUncheckedCreateInput>
  }

  /**
   * Friendship createMany
   */
  export type FriendshipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Friendships.
     */
    data: FriendshipCreateManyInput | FriendshipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Friendship createManyAndReturn
   */
  export type FriendshipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * The data used to create many Friendships.
     */
    data: FriendshipCreateManyInput | FriendshipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friendship update
   */
  export type FriendshipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * The data needed to update a Friendship.
     */
    data: XOR<FriendshipUpdateInput, FriendshipUncheckedUpdateInput>
    /**
     * Choose, which Friendship to update.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship updateMany
   */
  export type FriendshipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Friendships.
     */
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyInput>
    /**
     * Filter which Friendships to update
     */
    where?: FriendshipWhereInput
    /**
     * Limit how many Friendships to update.
     */
    limit?: number
  }

  /**
   * Friendship updateManyAndReturn
   */
  export type FriendshipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * The data used to update Friendships.
     */
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyInput>
    /**
     * Filter which Friendships to update
     */
    where?: FriendshipWhereInput
    /**
     * Limit how many Friendships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friendship upsert
   */
  export type FriendshipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * The filter to search for the Friendship to update in case it exists.
     */
    where: FriendshipWhereUniqueInput
    /**
     * In case the Friendship found by the `where` argument doesn't exist, create a new Friendship with this data.
     */
    create: XOR<FriendshipCreateInput, FriendshipUncheckedCreateInput>
    /**
     * In case the Friendship was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FriendshipUpdateInput, FriendshipUncheckedUpdateInput>
  }

  /**
   * Friendship delete
   */
  export type FriendshipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter which Friendship to delete.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship deleteMany
   */
  export type FriendshipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friendships to delete
     */
    where?: FriendshipWhereInput
    /**
     * Limit how many Friendships to delete.
     */
    limit?: number
  }

  /**
   * Friendship without action
   */
  export type FriendshipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
  }


  /**
   * Model Match
   */

  export type AggregateMatch = {
    _count: MatchCountAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  export type MatchMinAggregateOutputType = {
    id: string | null
    player1Id: string | null
    player2Id: string | null
    status: $Enums.MatchStatus | null
    currentTurnUserId: string | null
    winnerUserId: string | null
    createdAt: Date | null
    startedAt: Date | null
    endedAt: Date | null
  }

  export type MatchMaxAggregateOutputType = {
    id: string | null
    player1Id: string | null
    player2Id: string | null
    status: $Enums.MatchStatus | null
    currentTurnUserId: string | null
    winnerUserId: string | null
    createdAt: Date | null
    startedAt: Date | null
    endedAt: Date | null
  }

  export type MatchCountAggregateOutputType = {
    id: number
    player1Id: number
    player2Id: number
    status: number
    currentTurnUserId: number
    winnerUserId: number
    createdAt: number
    startedAt: number
    endedAt: number
    _all: number
  }


  export type MatchMinAggregateInputType = {
    id?: true
    player1Id?: true
    player2Id?: true
    status?: true
    currentTurnUserId?: true
    winnerUserId?: true
    createdAt?: true
    startedAt?: true
    endedAt?: true
  }

  export type MatchMaxAggregateInputType = {
    id?: true
    player1Id?: true
    player2Id?: true
    status?: true
    currentTurnUserId?: true
    winnerUserId?: true
    createdAt?: true
    startedAt?: true
    endedAt?: true
  }

  export type MatchCountAggregateInputType = {
    id?: true
    player1Id?: true
    player2Id?: true
    status?: true
    currentTurnUserId?: true
    winnerUserId?: true
    createdAt?: true
    startedAt?: true
    endedAt?: true
    _all?: true
  }

  export type MatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Match to aggregate.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matches
    **/
    _count?: true | MatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchMaxAggregateInputType
  }

  export type GetMatchAggregateType<T extends MatchAggregateArgs> = {
        [P in keyof T & keyof AggregateMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatch[P]>
      : GetScalarType<T[P], AggregateMatch[P]>
  }




  export type MatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithAggregationInput | MatchOrderByWithAggregationInput[]
    by: MatchScalarFieldEnum[] | MatchScalarFieldEnum
    having?: MatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchCountAggregateInputType | true
    _min?: MatchMinAggregateInputType
    _max?: MatchMaxAggregateInputType
  }

  export type MatchGroupByOutputType = {
    id: string
    player1Id: string
    player2Id: string
    status: $Enums.MatchStatus
    currentTurnUserId: string | null
    winnerUserId: string | null
    createdAt: Date
    startedAt: Date | null
    endedAt: Date | null
    _count: MatchCountAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  type GetMatchGroupByPayload<T extends MatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchGroupByOutputType[P]>
            : GetScalarType<T[P], MatchGroupByOutputType[P]>
        }
      >
    >


  export type MatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    player1Id?: boolean
    player2Id?: boolean
    status?: boolean
    currentTurnUserId?: boolean
    winnerUserId?: boolean
    createdAt?: boolean
    startedAt?: boolean
    endedAt?: boolean
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | UserDefaultArgs<ExtArgs>
    currentTurnUser?: boolean | Match$currentTurnUserArgs<ExtArgs>
    winnerUser?: boolean | Match$winnerUserArgs<ExtArgs>
    boards?: boolean | Match$boardsArgs<ExtArgs>
    moves?: boolean | Match$movesArgs<ExtArgs>
    _count?: boolean | MatchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    player1Id?: boolean
    player2Id?: boolean
    status?: boolean
    currentTurnUserId?: boolean
    winnerUserId?: boolean
    createdAt?: boolean
    startedAt?: boolean
    endedAt?: boolean
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | UserDefaultArgs<ExtArgs>
    currentTurnUser?: boolean | Match$currentTurnUserArgs<ExtArgs>
    winnerUser?: boolean | Match$winnerUserArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    player1Id?: boolean
    player2Id?: boolean
    status?: boolean
    currentTurnUserId?: boolean
    winnerUserId?: boolean
    createdAt?: boolean
    startedAt?: boolean
    endedAt?: boolean
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | UserDefaultArgs<ExtArgs>
    currentTurnUser?: boolean | Match$currentTurnUserArgs<ExtArgs>
    winnerUser?: boolean | Match$winnerUserArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectScalar = {
    id?: boolean
    player1Id?: boolean
    player2Id?: boolean
    status?: boolean
    currentTurnUserId?: boolean
    winnerUserId?: boolean
    createdAt?: boolean
    startedAt?: boolean
    endedAt?: boolean
  }

  export type MatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "player1Id" | "player2Id" | "status" | "currentTurnUserId" | "winnerUserId" | "createdAt" | "startedAt" | "endedAt", ExtArgs["result"]["match"]>
  export type MatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | UserDefaultArgs<ExtArgs>
    currentTurnUser?: boolean | Match$currentTurnUserArgs<ExtArgs>
    winnerUser?: boolean | Match$winnerUserArgs<ExtArgs>
    boards?: boolean | Match$boardsArgs<ExtArgs>
    moves?: boolean | Match$movesArgs<ExtArgs>
    _count?: boolean | MatchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | UserDefaultArgs<ExtArgs>
    currentTurnUser?: boolean | Match$currentTurnUserArgs<ExtArgs>
    winnerUser?: boolean | Match$winnerUserArgs<ExtArgs>
  }
  export type MatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | UserDefaultArgs<ExtArgs>
    currentTurnUser?: boolean | Match$currentTurnUserArgs<ExtArgs>
    winnerUser?: boolean | Match$winnerUserArgs<ExtArgs>
  }

  export type $MatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Match"
    objects: {
      player1: Prisma.$UserPayload<ExtArgs>
      player2: Prisma.$UserPayload<ExtArgs>
      currentTurnUser: Prisma.$UserPayload<ExtArgs> | null
      winnerUser: Prisma.$UserPayload<ExtArgs> | null
      boards: Prisma.$BoardPayload<ExtArgs>[]
      moves: Prisma.$MovePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      player1Id: string
      player2Id: string
      status: $Enums.MatchStatus
      currentTurnUserId: string | null
      winnerUserId: string | null
      createdAt: Date
      startedAt: Date | null
      endedAt: Date | null
    }, ExtArgs["result"]["match"]>
    composites: {}
  }

  type MatchGetPayload<S extends boolean | null | undefined | MatchDefaultArgs> = $Result.GetResult<Prisma.$MatchPayload, S>

  type MatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchCountAggregateInputType | true
    }

  export interface MatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Match'], meta: { name: 'Match' } }
    /**
     * Find zero or one Match that matches the filter.
     * @param {MatchFindUniqueArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchFindUniqueArgs>(args: SelectSubset<T, MatchFindUniqueArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Match that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchFindUniqueOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchFindFirstArgs>(args?: SelectSubset<T, MatchFindFirstArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matches
     * const matches = await prisma.match.findMany()
     * 
     * // Get first 10 Matches
     * const matches = await prisma.match.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchWithIdOnly = await prisma.match.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchFindManyArgs>(args?: SelectSubset<T, MatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Match.
     * @param {MatchCreateArgs} args - Arguments to create a Match.
     * @example
     * // Create one Match
     * const Match = await prisma.match.create({
     *   data: {
     *     // ... data to create a Match
     *   }
     * })
     * 
     */
    create<T extends MatchCreateArgs>(args: SelectSubset<T, MatchCreateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matches.
     * @param {MatchCreateManyArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchCreateManyArgs>(args?: SelectSubset<T, MatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Matches and returns the data saved in the database.
     * @param {MatchCreateManyAndReturnArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Match.
     * @param {MatchDeleteArgs} args - Arguments to delete one Match.
     * @example
     * // Delete one Match
     * const Match = await prisma.match.delete({
     *   where: {
     *     // ... filter to delete one Match
     *   }
     * })
     * 
     */
    delete<T extends MatchDeleteArgs>(args: SelectSubset<T, MatchDeleteArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Match.
     * @param {MatchUpdateArgs} args - Arguments to update one Match.
     * @example
     * // Update one Match
     * const match = await prisma.match.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchUpdateArgs>(args: SelectSubset<T, MatchUpdateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matches.
     * @param {MatchDeleteManyArgs} args - Arguments to filter Matches to delete.
     * @example
     * // Delete a few Matches
     * const { count } = await prisma.match.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchDeleteManyArgs>(args?: SelectSubset<T, MatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchUpdateManyArgs>(args: SelectSubset<T, MatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches and returns the data updated in the database.
     * @param {MatchUpdateManyAndReturnArgs} args - Arguments to update many Matches.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MatchUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Match.
     * @param {MatchUpsertArgs} args - Arguments to update or create a Match.
     * @example
     * // Update or create a Match
     * const match = await prisma.match.upsert({
     *   create: {
     *     // ... data to create a Match
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Match we want to update
     *   }
     * })
     */
    upsert<T extends MatchUpsertArgs>(args: SelectSubset<T, MatchUpsertArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchCountArgs} args - Arguments to filter Matches to count.
     * @example
     * // Count the number of Matches
     * const count = await prisma.match.count({
     *   where: {
     *     // ... the filter for the Matches we want to count
     *   }
     * })
    **/
    count<T extends MatchCountArgs>(
      args?: Subset<T, MatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchAggregateArgs>(args: Subset<T, MatchAggregateArgs>): Prisma.PrismaPromise<GetMatchAggregateType<T>>

    /**
     * Group by Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchGroupByArgs} args - Group by arguments.
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
      T extends MatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchGroupByArgs['orderBy'] }
        : { orderBy?: MatchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Match model
   */
  readonly fields: MatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Match.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player1<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    player2<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    currentTurnUser<T extends Match$currentTurnUserArgs<ExtArgs> = {}>(args?: Subset<T, Match$currentTurnUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    winnerUser<T extends Match$winnerUserArgs<ExtArgs> = {}>(args?: Subset<T, Match$winnerUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    boards<T extends Match$boardsArgs<ExtArgs> = {}>(args?: Subset<T, Match$boardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    moves<T extends Match$movesArgs<ExtArgs> = {}>(args?: Subset<T, Match$movesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Match model
   */
  interface MatchFieldRefs {
    readonly id: FieldRef<"Match", 'String'>
    readonly player1Id: FieldRef<"Match", 'String'>
    readonly player2Id: FieldRef<"Match", 'String'>
    readonly status: FieldRef<"Match", 'MatchStatus'>
    readonly currentTurnUserId: FieldRef<"Match", 'String'>
    readonly winnerUserId: FieldRef<"Match", 'String'>
    readonly createdAt: FieldRef<"Match", 'DateTime'>
    readonly startedAt: FieldRef<"Match", 'DateTime'>
    readonly endedAt: FieldRef<"Match", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Match findUnique
   */
  export type MatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findUniqueOrThrow
   */
  export type MatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findFirst
   */
  export type MatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findFirstOrThrow
   */
  export type MatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findMany
   */
  export type MatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match create
   */
  export type MatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to create a Match.
     */
    data: XOR<MatchCreateInput, MatchUncheckedCreateInput>
  }

  /**
   * Match createMany
   */
  export type MatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Match createManyAndReturn
   */
  export type MatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match update
   */
  export type MatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to update a Match.
     */
    data: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
    /**
     * Choose, which Match to update.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match updateMany
   */
  export type MatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
  }

  /**
   * Match updateManyAndReturn
   */
  export type MatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match upsert
   */
  export type MatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The filter to search for the Match to update in case it exists.
     */
    where: MatchWhereUniqueInput
    /**
     * In case the Match found by the `where` argument doesn't exist, create a new Match with this data.
     */
    create: XOR<MatchCreateInput, MatchUncheckedCreateInput>
    /**
     * In case the Match was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
  }

  /**
   * Match delete
   */
  export type MatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter which Match to delete.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match deleteMany
   */
  export type MatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matches to delete
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to delete.
     */
    limit?: number
  }

  /**
   * Match.currentTurnUser
   */
  export type Match$currentTurnUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Match.winnerUser
   */
  export type Match$winnerUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Match.boards
   */
  export type Match$boardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    where?: BoardWhereInput
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    cursor?: BoardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * Match.moves
   */
  export type Match$movesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    where?: MoveWhereInput
    orderBy?: MoveOrderByWithRelationInput | MoveOrderByWithRelationInput[]
    cursor?: MoveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoveScalarFieldEnum | MoveScalarFieldEnum[]
  }

  /**
   * Match without action
   */
  export type MatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
  }


  /**
   * Model Board
   */

  export type AggregateBoard = {
    _count: BoardCountAggregateOutputType | null
    _avg: BoardAvgAggregateOutputType | null
    _sum: BoardSumAggregateOutputType | null
    _min: BoardMinAggregateOutputType | null
    _max: BoardMaxAggregateOutputType | null
  }

  export type BoardAvgAggregateOutputType = {
    numbers: number | null
  }

  export type BoardSumAggregateOutputType = {
    numbers: number[]
  }

  export type BoardMinAggregateOutputType = {
    id: string | null
    matchId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type BoardMaxAggregateOutputType = {
    id: string | null
    matchId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type BoardCountAggregateOutputType = {
    id: number
    matchId: number
    userId: number
    numbers: number
    createdAt: number
    _all: number
  }


  export type BoardAvgAggregateInputType = {
    numbers?: true
  }

  export type BoardSumAggregateInputType = {
    numbers?: true
  }

  export type BoardMinAggregateInputType = {
    id?: true
    matchId?: true
    userId?: true
    createdAt?: true
  }

  export type BoardMaxAggregateInputType = {
    id?: true
    matchId?: true
    userId?: true
    createdAt?: true
  }

  export type BoardCountAggregateInputType = {
    id?: true
    matchId?: true
    userId?: true
    numbers?: true
    createdAt?: true
    _all?: true
  }

  export type BoardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Board to aggregate.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Boards
    **/
    _count?: true | BoardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BoardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BoardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoardMaxAggregateInputType
  }

  export type GetBoardAggregateType<T extends BoardAggregateArgs> = {
        [P in keyof T & keyof AggregateBoard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoard[P]>
      : GetScalarType<T[P], AggregateBoard[P]>
  }




  export type BoardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoardWhereInput
    orderBy?: BoardOrderByWithAggregationInput | BoardOrderByWithAggregationInput[]
    by: BoardScalarFieldEnum[] | BoardScalarFieldEnum
    having?: BoardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoardCountAggregateInputType | true
    _avg?: BoardAvgAggregateInputType
    _sum?: BoardSumAggregateInputType
    _min?: BoardMinAggregateInputType
    _max?: BoardMaxAggregateInputType
  }

  export type BoardGroupByOutputType = {
    id: string
    matchId: string
    userId: string
    numbers: number[]
    createdAt: Date
    _count: BoardCountAggregateOutputType | null
    _avg: BoardAvgAggregateOutputType | null
    _sum: BoardSumAggregateOutputType | null
    _min: BoardMinAggregateOutputType | null
    _max: BoardMaxAggregateOutputType | null
  }

  type GetBoardGroupByPayload<T extends BoardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoardGroupByOutputType[P]>
            : GetScalarType<T[P], BoardGroupByOutputType[P]>
        }
      >
    >


  export type BoardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    userId?: boolean
    numbers?: boolean
    createdAt?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["board"]>

  export type BoardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    userId?: boolean
    numbers?: boolean
    createdAt?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["board"]>

  export type BoardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    userId?: boolean
    numbers?: boolean
    createdAt?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["board"]>

  export type BoardSelectScalar = {
    id?: boolean
    matchId?: boolean
    userId?: boolean
    numbers?: boolean
    createdAt?: boolean
  }

  export type BoardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "matchId" | "userId" | "numbers" | "createdAt", ExtArgs["result"]["board"]>
  export type BoardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BoardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BoardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BoardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Board"
    objects: {
      match: Prisma.$MatchPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      matchId: string
      userId: string
      numbers: number[]
      createdAt: Date
    }, ExtArgs["result"]["board"]>
    composites: {}
  }

  type BoardGetPayload<S extends boolean | null | undefined | BoardDefaultArgs> = $Result.GetResult<Prisma.$BoardPayload, S>

  type BoardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BoardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BoardCountAggregateInputType | true
    }

  export interface BoardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Board'], meta: { name: 'Board' } }
    /**
     * Find zero or one Board that matches the filter.
     * @param {BoardFindUniqueArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BoardFindUniqueArgs>(args: SelectSubset<T, BoardFindUniqueArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Board that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BoardFindUniqueOrThrowArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BoardFindUniqueOrThrowArgs>(args: SelectSubset<T, BoardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Board that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindFirstArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BoardFindFirstArgs>(args?: SelectSubset<T, BoardFindFirstArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Board that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindFirstOrThrowArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BoardFindFirstOrThrowArgs>(args?: SelectSubset<T, BoardFindFirstOrThrowArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Boards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boards
     * const boards = await prisma.board.findMany()
     * 
     * // Get first 10 Boards
     * const boards = await prisma.board.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boardWithIdOnly = await prisma.board.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BoardFindManyArgs>(args?: SelectSubset<T, BoardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Board.
     * @param {BoardCreateArgs} args - Arguments to create a Board.
     * @example
     * // Create one Board
     * const Board = await prisma.board.create({
     *   data: {
     *     // ... data to create a Board
     *   }
     * })
     * 
     */
    create<T extends BoardCreateArgs>(args: SelectSubset<T, BoardCreateArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Boards.
     * @param {BoardCreateManyArgs} args - Arguments to create many Boards.
     * @example
     * // Create many Boards
     * const board = await prisma.board.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BoardCreateManyArgs>(args?: SelectSubset<T, BoardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Boards and returns the data saved in the database.
     * @param {BoardCreateManyAndReturnArgs} args - Arguments to create many Boards.
     * @example
     * // Create many Boards
     * const board = await prisma.board.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Boards and only return the `id`
     * const boardWithIdOnly = await prisma.board.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BoardCreateManyAndReturnArgs>(args?: SelectSubset<T, BoardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Board.
     * @param {BoardDeleteArgs} args - Arguments to delete one Board.
     * @example
     * // Delete one Board
     * const Board = await prisma.board.delete({
     *   where: {
     *     // ... filter to delete one Board
     *   }
     * })
     * 
     */
    delete<T extends BoardDeleteArgs>(args: SelectSubset<T, BoardDeleteArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Board.
     * @param {BoardUpdateArgs} args - Arguments to update one Board.
     * @example
     * // Update one Board
     * const board = await prisma.board.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BoardUpdateArgs>(args: SelectSubset<T, BoardUpdateArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Boards.
     * @param {BoardDeleteManyArgs} args - Arguments to filter Boards to delete.
     * @example
     * // Delete a few Boards
     * const { count } = await prisma.board.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BoardDeleteManyArgs>(args?: SelectSubset<T, BoardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boards
     * const board = await prisma.board.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BoardUpdateManyArgs>(args: SelectSubset<T, BoardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boards and returns the data updated in the database.
     * @param {BoardUpdateManyAndReturnArgs} args - Arguments to update many Boards.
     * @example
     * // Update many Boards
     * const board = await prisma.board.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Boards and only return the `id`
     * const boardWithIdOnly = await prisma.board.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BoardUpdateManyAndReturnArgs>(args: SelectSubset<T, BoardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Board.
     * @param {BoardUpsertArgs} args - Arguments to update or create a Board.
     * @example
     * // Update or create a Board
     * const board = await prisma.board.upsert({
     *   create: {
     *     // ... data to create a Board
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Board we want to update
     *   }
     * })
     */
    upsert<T extends BoardUpsertArgs>(args: SelectSubset<T, BoardUpsertArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardCountArgs} args - Arguments to filter Boards to count.
     * @example
     * // Count the number of Boards
     * const count = await prisma.board.count({
     *   where: {
     *     // ... the filter for the Boards we want to count
     *   }
     * })
    **/
    count<T extends BoardCountArgs>(
      args?: Subset<T, BoardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BoardAggregateArgs>(args: Subset<T, BoardAggregateArgs>): Prisma.PrismaPromise<GetBoardAggregateType<T>>

    /**
     * Group by Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardGroupByArgs} args - Group by arguments.
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
      T extends BoardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoardGroupByArgs['orderBy'] }
        : { orderBy?: BoardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BoardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Board model
   */
  readonly fields: BoardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Board.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BoardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    match<T extends MatchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatchDefaultArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Board model
   */
  interface BoardFieldRefs {
    readonly id: FieldRef<"Board", 'String'>
    readonly matchId: FieldRef<"Board", 'String'>
    readonly userId: FieldRef<"Board", 'String'>
    readonly numbers: FieldRef<"Board", 'Int[]'>
    readonly createdAt: FieldRef<"Board", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Board findUnique
   */
  export type BoardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board findUniqueOrThrow
   */
  export type BoardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board findFirst
   */
  export type BoardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boards.
     */
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * Board findFirstOrThrow
   */
  export type BoardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boards.
     */
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * Board findMany
   */
  export type BoardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Boards to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * Board create
   */
  export type BoardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * The data needed to create a Board.
     */
    data: XOR<BoardCreateInput, BoardUncheckedCreateInput>
  }

  /**
   * Board createMany
   */
  export type BoardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Boards.
     */
    data: BoardCreateManyInput | BoardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Board createManyAndReturn
   */
  export type BoardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * The data used to create many Boards.
     */
    data: BoardCreateManyInput | BoardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Board update
   */
  export type BoardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * The data needed to update a Board.
     */
    data: XOR<BoardUpdateInput, BoardUncheckedUpdateInput>
    /**
     * Choose, which Board to update.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board updateMany
   */
  export type BoardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Boards.
     */
    data: XOR<BoardUpdateManyMutationInput, BoardUncheckedUpdateManyInput>
    /**
     * Filter which Boards to update
     */
    where?: BoardWhereInput
    /**
     * Limit how many Boards to update.
     */
    limit?: number
  }

  /**
   * Board updateManyAndReturn
   */
  export type BoardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * The data used to update Boards.
     */
    data: XOR<BoardUpdateManyMutationInput, BoardUncheckedUpdateManyInput>
    /**
     * Filter which Boards to update
     */
    where?: BoardWhereInput
    /**
     * Limit how many Boards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Board upsert
   */
  export type BoardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * The filter to search for the Board to update in case it exists.
     */
    where: BoardWhereUniqueInput
    /**
     * In case the Board found by the `where` argument doesn't exist, create a new Board with this data.
     */
    create: XOR<BoardCreateInput, BoardUncheckedCreateInput>
    /**
     * In case the Board was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoardUpdateInput, BoardUncheckedUpdateInput>
  }

  /**
   * Board delete
   */
  export type BoardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter which Board to delete.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board deleteMany
   */
  export type BoardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Boards to delete
     */
    where?: BoardWhereInput
    /**
     * Limit how many Boards to delete.
     */
    limit?: number
  }

  /**
   * Board without action
   */
  export type BoardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
  }


  /**
   * Model Move
   */

  export type AggregateMove = {
    _count: MoveCountAggregateOutputType | null
    _avg: MoveAvgAggregateOutputType | null
    _sum: MoveSumAggregateOutputType | null
    _min: MoveMinAggregateOutputType | null
    _max: MoveMaxAggregateOutputType | null
  }

  export type MoveAvgAggregateOutputType = {
    moveNumber: number | null
    number: number | null
  }

  export type MoveSumAggregateOutputType = {
    moveNumber: number | null
    number: number | null
  }

  export type MoveMinAggregateOutputType = {
    id: string | null
    matchId: string | null
    moveNumber: number | null
    chosenByUserId: string | null
    number: number | null
    createdAt: Date | null
  }

  export type MoveMaxAggregateOutputType = {
    id: string | null
    matchId: string | null
    moveNumber: number | null
    chosenByUserId: string | null
    number: number | null
    createdAt: Date | null
  }

  export type MoveCountAggregateOutputType = {
    id: number
    matchId: number
    moveNumber: number
    chosenByUserId: number
    number: number
    createdAt: number
    _all: number
  }


  export type MoveAvgAggregateInputType = {
    moveNumber?: true
    number?: true
  }

  export type MoveSumAggregateInputType = {
    moveNumber?: true
    number?: true
  }

  export type MoveMinAggregateInputType = {
    id?: true
    matchId?: true
    moveNumber?: true
    chosenByUserId?: true
    number?: true
    createdAt?: true
  }

  export type MoveMaxAggregateInputType = {
    id?: true
    matchId?: true
    moveNumber?: true
    chosenByUserId?: true
    number?: true
    createdAt?: true
  }

  export type MoveCountAggregateInputType = {
    id?: true
    matchId?: true
    moveNumber?: true
    chosenByUserId?: true
    number?: true
    createdAt?: true
    _all?: true
  }

  export type MoveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Move to aggregate.
     */
    where?: MoveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moves to fetch.
     */
    orderBy?: MoveOrderByWithRelationInput | MoveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MoveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Moves
    **/
    _count?: true | MoveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MoveAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MoveSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MoveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MoveMaxAggregateInputType
  }

  export type GetMoveAggregateType<T extends MoveAggregateArgs> = {
        [P in keyof T & keyof AggregateMove]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMove[P]>
      : GetScalarType<T[P], AggregateMove[P]>
  }




  export type MoveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoveWhereInput
    orderBy?: MoveOrderByWithAggregationInput | MoveOrderByWithAggregationInput[]
    by: MoveScalarFieldEnum[] | MoveScalarFieldEnum
    having?: MoveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MoveCountAggregateInputType | true
    _avg?: MoveAvgAggregateInputType
    _sum?: MoveSumAggregateInputType
    _min?: MoveMinAggregateInputType
    _max?: MoveMaxAggregateInputType
  }

  export type MoveGroupByOutputType = {
    id: string
    matchId: string
    moveNumber: number
    chosenByUserId: string
    number: number
    createdAt: Date
    _count: MoveCountAggregateOutputType | null
    _avg: MoveAvgAggregateOutputType | null
    _sum: MoveSumAggregateOutputType | null
    _min: MoveMinAggregateOutputType | null
    _max: MoveMaxAggregateOutputType | null
  }

  type GetMoveGroupByPayload<T extends MoveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MoveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MoveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MoveGroupByOutputType[P]>
            : GetScalarType<T[P], MoveGroupByOutputType[P]>
        }
      >
    >


  export type MoveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    moveNumber?: boolean
    chosenByUserId?: boolean
    number?: boolean
    createdAt?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
    chosenBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["move"]>

  export type MoveSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    moveNumber?: boolean
    chosenByUserId?: boolean
    number?: boolean
    createdAt?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
    chosenBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["move"]>

  export type MoveSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    moveNumber?: boolean
    chosenByUserId?: boolean
    number?: boolean
    createdAt?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
    chosenBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["move"]>

  export type MoveSelectScalar = {
    id?: boolean
    matchId?: boolean
    moveNumber?: boolean
    chosenByUserId?: boolean
    number?: boolean
    createdAt?: boolean
  }

  export type MoveOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "matchId" | "moveNumber" | "chosenByUserId" | "number" | "createdAt", ExtArgs["result"]["move"]>
  export type MoveInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
    chosenBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MoveIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
    chosenBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MoveIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
    chosenBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MovePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Move"
    objects: {
      match: Prisma.$MatchPayload<ExtArgs>
      chosenBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      matchId: string
      moveNumber: number
      chosenByUserId: string
      number: number
      createdAt: Date
    }, ExtArgs["result"]["move"]>
    composites: {}
  }

  type MoveGetPayload<S extends boolean | null | undefined | MoveDefaultArgs> = $Result.GetResult<Prisma.$MovePayload, S>

  type MoveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MoveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MoveCountAggregateInputType | true
    }

  export interface MoveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Move'], meta: { name: 'Move' } }
    /**
     * Find zero or one Move that matches the filter.
     * @param {MoveFindUniqueArgs} args - Arguments to find a Move
     * @example
     * // Get one Move
     * const move = await prisma.move.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MoveFindUniqueArgs>(args: SelectSubset<T, MoveFindUniqueArgs<ExtArgs>>): Prisma__MoveClient<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Move that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MoveFindUniqueOrThrowArgs} args - Arguments to find a Move
     * @example
     * // Get one Move
     * const move = await prisma.move.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MoveFindUniqueOrThrowArgs>(args: SelectSubset<T, MoveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MoveClient<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Move that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveFindFirstArgs} args - Arguments to find a Move
     * @example
     * // Get one Move
     * const move = await prisma.move.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MoveFindFirstArgs>(args?: SelectSubset<T, MoveFindFirstArgs<ExtArgs>>): Prisma__MoveClient<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Move that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveFindFirstOrThrowArgs} args - Arguments to find a Move
     * @example
     * // Get one Move
     * const move = await prisma.move.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MoveFindFirstOrThrowArgs>(args?: SelectSubset<T, MoveFindFirstOrThrowArgs<ExtArgs>>): Prisma__MoveClient<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Moves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Moves
     * const moves = await prisma.move.findMany()
     * 
     * // Get first 10 Moves
     * const moves = await prisma.move.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moveWithIdOnly = await prisma.move.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MoveFindManyArgs>(args?: SelectSubset<T, MoveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Move.
     * @param {MoveCreateArgs} args - Arguments to create a Move.
     * @example
     * // Create one Move
     * const Move = await prisma.move.create({
     *   data: {
     *     // ... data to create a Move
     *   }
     * })
     * 
     */
    create<T extends MoveCreateArgs>(args: SelectSubset<T, MoveCreateArgs<ExtArgs>>): Prisma__MoveClient<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Moves.
     * @param {MoveCreateManyArgs} args - Arguments to create many Moves.
     * @example
     * // Create many Moves
     * const move = await prisma.move.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MoveCreateManyArgs>(args?: SelectSubset<T, MoveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Moves and returns the data saved in the database.
     * @param {MoveCreateManyAndReturnArgs} args - Arguments to create many Moves.
     * @example
     * // Create many Moves
     * const move = await prisma.move.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Moves and only return the `id`
     * const moveWithIdOnly = await prisma.move.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MoveCreateManyAndReturnArgs>(args?: SelectSubset<T, MoveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Move.
     * @param {MoveDeleteArgs} args - Arguments to delete one Move.
     * @example
     * // Delete one Move
     * const Move = await prisma.move.delete({
     *   where: {
     *     // ... filter to delete one Move
     *   }
     * })
     * 
     */
    delete<T extends MoveDeleteArgs>(args: SelectSubset<T, MoveDeleteArgs<ExtArgs>>): Prisma__MoveClient<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Move.
     * @param {MoveUpdateArgs} args - Arguments to update one Move.
     * @example
     * // Update one Move
     * const move = await prisma.move.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MoveUpdateArgs>(args: SelectSubset<T, MoveUpdateArgs<ExtArgs>>): Prisma__MoveClient<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Moves.
     * @param {MoveDeleteManyArgs} args - Arguments to filter Moves to delete.
     * @example
     * // Delete a few Moves
     * const { count } = await prisma.move.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MoveDeleteManyArgs>(args?: SelectSubset<T, MoveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Moves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Moves
     * const move = await prisma.move.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MoveUpdateManyArgs>(args: SelectSubset<T, MoveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Moves and returns the data updated in the database.
     * @param {MoveUpdateManyAndReturnArgs} args - Arguments to update many Moves.
     * @example
     * // Update many Moves
     * const move = await prisma.move.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Moves and only return the `id`
     * const moveWithIdOnly = await prisma.move.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MoveUpdateManyAndReturnArgs>(args: SelectSubset<T, MoveUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Move.
     * @param {MoveUpsertArgs} args - Arguments to update or create a Move.
     * @example
     * // Update or create a Move
     * const move = await prisma.move.upsert({
     *   create: {
     *     // ... data to create a Move
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Move we want to update
     *   }
     * })
     */
    upsert<T extends MoveUpsertArgs>(args: SelectSubset<T, MoveUpsertArgs<ExtArgs>>): Prisma__MoveClient<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Moves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveCountArgs} args - Arguments to filter Moves to count.
     * @example
     * // Count the number of Moves
     * const count = await prisma.move.count({
     *   where: {
     *     // ... the filter for the Moves we want to count
     *   }
     * })
    **/
    count<T extends MoveCountArgs>(
      args?: Subset<T, MoveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MoveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Move.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MoveAggregateArgs>(args: Subset<T, MoveAggregateArgs>): Prisma.PrismaPromise<GetMoveAggregateType<T>>

    /**
     * Group by Move.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveGroupByArgs} args - Group by arguments.
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
      T extends MoveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MoveGroupByArgs['orderBy'] }
        : { orderBy?: MoveGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MoveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Move model
   */
  readonly fields: MoveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Move.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MoveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    match<T extends MatchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatchDefaultArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chosenBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Move model
   */
  interface MoveFieldRefs {
    readonly id: FieldRef<"Move", 'String'>
    readonly matchId: FieldRef<"Move", 'String'>
    readonly moveNumber: FieldRef<"Move", 'Int'>
    readonly chosenByUserId: FieldRef<"Move", 'String'>
    readonly number: FieldRef<"Move", 'Int'>
    readonly createdAt: FieldRef<"Move", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Move findUnique
   */
  export type MoveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    /**
     * Filter, which Move to fetch.
     */
    where: MoveWhereUniqueInput
  }

  /**
   * Move findUniqueOrThrow
   */
  export type MoveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    /**
     * Filter, which Move to fetch.
     */
    where: MoveWhereUniqueInput
  }

  /**
   * Move findFirst
   */
  export type MoveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    /**
     * Filter, which Move to fetch.
     */
    where?: MoveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moves to fetch.
     */
    orderBy?: MoveOrderByWithRelationInput | MoveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Moves.
     */
    cursor?: MoveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Moves.
     */
    distinct?: MoveScalarFieldEnum | MoveScalarFieldEnum[]
  }

  /**
   * Move findFirstOrThrow
   */
  export type MoveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    /**
     * Filter, which Move to fetch.
     */
    where?: MoveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moves to fetch.
     */
    orderBy?: MoveOrderByWithRelationInput | MoveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Moves.
     */
    cursor?: MoveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Moves.
     */
    distinct?: MoveScalarFieldEnum | MoveScalarFieldEnum[]
  }

  /**
   * Move findMany
   */
  export type MoveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    /**
     * Filter, which Moves to fetch.
     */
    where?: MoveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moves to fetch.
     */
    orderBy?: MoveOrderByWithRelationInput | MoveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Moves.
     */
    cursor?: MoveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moves.
     */
    skip?: number
    distinct?: MoveScalarFieldEnum | MoveScalarFieldEnum[]
  }

  /**
   * Move create
   */
  export type MoveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    /**
     * The data needed to create a Move.
     */
    data: XOR<MoveCreateInput, MoveUncheckedCreateInput>
  }

  /**
   * Move createMany
   */
  export type MoveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Moves.
     */
    data: MoveCreateManyInput | MoveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Move createManyAndReturn
   */
  export type MoveCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * The data used to create many Moves.
     */
    data: MoveCreateManyInput | MoveCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Move update
   */
  export type MoveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    /**
     * The data needed to update a Move.
     */
    data: XOR<MoveUpdateInput, MoveUncheckedUpdateInput>
    /**
     * Choose, which Move to update.
     */
    where: MoveWhereUniqueInput
  }

  /**
   * Move updateMany
   */
  export type MoveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Moves.
     */
    data: XOR<MoveUpdateManyMutationInput, MoveUncheckedUpdateManyInput>
    /**
     * Filter which Moves to update
     */
    where?: MoveWhereInput
    /**
     * Limit how many Moves to update.
     */
    limit?: number
  }

  /**
   * Move updateManyAndReturn
   */
  export type MoveUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * The data used to update Moves.
     */
    data: XOR<MoveUpdateManyMutationInput, MoveUncheckedUpdateManyInput>
    /**
     * Filter which Moves to update
     */
    where?: MoveWhereInput
    /**
     * Limit how many Moves to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Move upsert
   */
  export type MoveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    /**
     * The filter to search for the Move to update in case it exists.
     */
    where: MoveWhereUniqueInput
    /**
     * In case the Move found by the `where` argument doesn't exist, create a new Move with this data.
     */
    create: XOR<MoveCreateInput, MoveUncheckedCreateInput>
    /**
     * In case the Move was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MoveUpdateInput, MoveUncheckedUpdateInput>
  }

  /**
   * Move delete
   */
  export type MoveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    /**
     * Filter which Move to delete.
     */
    where: MoveWhereUniqueInput
  }

  /**
   * Move deleteMany
   */
  export type MoveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Moves to delete
     */
    where?: MoveWhereInput
    /**
     * Limit how many Moves to delete.
     */
    limit?: number
  }

  /**
   * Move without action
   */
  export type MoveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
  }


  /**
   * Model UserStats
   */

  export type AggregateUserStats = {
    _count: UserStatsCountAggregateOutputType | null
    _avg: UserStatsAvgAggregateOutputType | null
    _sum: UserStatsSumAggregateOutputType | null
    _min: UserStatsMinAggregateOutputType | null
    _max: UserStatsMaxAggregateOutputType | null
  }

  export type UserStatsAvgAggregateOutputType = {
    totalMatches: number | null
    wins: number | null
    losses: number | null
    draws: number | null
    winStreak: number | null
    bestWinStreak: number | null
  }

  export type UserStatsSumAggregateOutputType = {
    totalMatches: number | null
    wins: number | null
    losses: number | null
    draws: number | null
    winStreak: number | null
    bestWinStreak: number | null
  }

  export type UserStatsMinAggregateOutputType = {
    userId: string | null
    totalMatches: number | null
    wins: number | null
    losses: number | null
    draws: number | null
    winStreak: number | null
    bestWinStreak: number | null
    lastMatchAt: Date | null
  }

  export type UserStatsMaxAggregateOutputType = {
    userId: string | null
    totalMatches: number | null
    wins: number | null
    losses: number | null
    draws: number | null
    winStreak: number | null
    bestWinStreak: number | null
    lastMatchAt: Date | null
  }

  export type UserStatsCountAggregateOutputType = {
    userId: number
    totalMatches: number
    wins: number
    losses: number
    draws: number
    winStreak: number
    bestWinStreak: number
    lastMatchAt: number
    _all: number
  }


  export type UserStatsAvgAggregateInputType = {
    totalMatches?: true
    wins?: true
    losses?: true
    draws?: true
    winStreak?: true
    bestWinStreak?: true
  }

  export type UserStatsSumAggregateInputType = {
    totalMatches?: true
    wins?: true
    losses?: true
    draws?: true
    winStreak?: true
    bestWinStreak?: true
  }

  export type UserStatsMinAggregateInputType = {
    userId?: true
    totalMatches?: true
    wins?: true
    losses?: true
    draws?: true
    winStreak?: true
    bestWinStreak?: true
    lastMatchAt?: true
  }

  export type UserStatsMaxAggregateInputType = {
    userId?: true
    totalMatches?: true
    wins?: true
    losses?: true
    draws?: true
    winStreak?: true
    bestWinStreak?: true
    lastMatchAt?: true
  }

  export type UserStatsCountAggregateInputType = {
    userId?: true
    totalMatches?: true
    wins?: true
    losses?: true
    draws?: true
    winStreak?: true
    bestWinStreak?: true
    lastMatchAt?: true
    _all?: true
  }

  export type UserStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStats to aggregate.
     */
    where?: UserStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStats to fetch.
     */
    orderBy?: UserStatsOrderByWithRelationInput | UserStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserStats
    **/
    _count?: true | UserStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserStatsMaxAggregateInputType
  }

  export type GetUserStatsAggregateType<T extends UserStatsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserStats[P]>
      : GetScalarType<T[P], AggregateUserStats[P]>
  }




  export type UserStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStatsWhereInput
    orderBy?: UserStatsOrderByWithAggregationInput | UserStatsOrderByWithAggregationInput[]
    by: UserStatsScalarFieldEnum[] | UserStatsScalarFieldEnum
    having?: UserStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserStatsCountAggregateInputType | true
    _avg?: UserStatsAvgAggregateInputType
    _sum?: UserStatsSumAggregateInputType
    _min?: UserStatsMinAggregateInputType
    _max?: UserStatsMaxAggregateInputType
  }

  export type UserStatsGroupByOutputType = {
    userId: string
    totalMatches: number
    wins: number
    losses: number
    draws: number
    winStreak: number
    bestWinStreak: number
    lastMatchAt: Date | null
    _count: UserStatsCountAggregateOutputType | null
    _avg: UserStatsAvgAggregateOutputType | null
    _sum: UserStatsSumAggregateOutputType | null
    _min: UserStatsMinAggregateOutputType | null
    _max: UserStatsMaxAggregateOutputType | null
  }

  type GetUserStatsGroupByPayload<T extends UserStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserStatsGroupByOutputType[P]>
            : GetScalarType<T[P], UserStatsGroupByOutputType[P]>
        }
      >
    >


  export type UserStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    totalMatches?: boolean
    wins?: boolean
    losses?: boolean
    draws?: boolean
    winStreak?: boolean
    bestWinStreak?: boolean
    lastMatchAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userStats"]>

  export type UserStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    totalMatches?: boolean
    wins?: boolean
    losses?: boolean
    draws?: boolean
    winStreak?: boolean
    bestWinStreak?: boolean
    lastMatchAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userStats"]>

  export type UserStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    totalMatches?: boolean
    wins?: boolean
    losses?: boolean
    draws?: boolean
    winStreak?: boolean
    bestWinStreak?: boolean
    lastMatchAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userStats"]>

  export type UserStatsSelectScalar = {
    userId?: boolean
    totalMatches?: boolean
    wins?: boolean
    losses?: boolean
    draws?: boolean
    winStreak?: boolean
    bestWinStreak?: boolean
    lastMatchAt?: boolean
  }

  export type UserStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "totalMatches" | "wins" | "losses" | "draws" | "winStreak" | "bestWinStreak" | "lastMatchAt", ExtArgs["result"]["userStats"]>
  export type UserStatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserStatsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserStatsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserStats"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      totalMatches: number
      wins: number
      losses: number
      draws: number
      winStreak: number
      bestWinStreak: number
      lastMatchAt: Date | null
    }, ExtArgs["result"]["userStats"]>
    composites: {}
  }

  type UserStatsGetPayload<S extends boolean | null | undefined | UserStatsDefaultArgs> = $Result.GetResult<Prisma.$UserStatsPayload, S>

  type UserStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserStatsCountAggregateInputType | true
    }

  export interface UserStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserStats'], meta: { name: 'UserStats' } }
    /**
     * Find zero or one UserStats that matches the filter.
     * @param {UserStatsFindUniqueArgs} args - Arguments to find a UserStats
     * @example
     * // Get one UserStats
     * const userStats = await prisma.userStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserStatsFindUniqueArgs>(args: SelectSubset<T, UserStatsFindUniqueArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserStatsFindUniqueOrThrowArgs} args - Arguments to find a UserStats
     * @example
     * // Get one UserStats
     * const userStats = await prisma.userStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsFindFirstArgs} args - Arguments to find a UserStats
     * @example
     * // Get one UserStats
     * const userStats = await prisma.userStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserStatsFindFirstArgs>(args?: SelectSubset<T, UserStatsFindFirstArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsFindFirstOrThrowArgs} args - Arguments to find a UserStats
     * @example
     * // Get one UserStats
     * const userStats = await prisma.userStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserStats
     * const userStats = await prisma.userStats.findMany()
     * 
     * // Get first 10 UserStats
     * const userStats = await prisma.userStats.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userStatsWithUserIdOnly = await prisma.userStats.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserStatsFindManyArgs>(args?: SelectSubset<T, UserStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserStats.
     * @param {UserStatsCreateArgs} args - Arguments to create a UserStats.
     * @example
     * // Create one UserStats
     * const UserStats = await prisma.userStats.create({
     *   data: {
     *     // ... data to create a UserStats
     *   }
     * })
     * 
     */
    create<T extends UserStatsCreateArgs>(args: SelectSubset<T, UserStatsCreateArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserStats.
     * @param {UserStatsCreateManyArgs} args - Arguments to create many UserStats.
     * @example
     * // Create many UserStats
     * const userStats = await prisma.userStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserStatsCreateManyArgs>(args?: SelectSubset<T, UserStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserStats and returns the data saved in the database.
     * @param {UserStatsCreateManyAndReturnArgs} args - Arguments to create many UserStats.
     * @example
     * // Create many UserStats
     * const userStats = await prisma.userStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserStats and only return the `userId`
     * const userStatsWithUserIdOnly = await prisma.userStats.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserStats.
     * @param {UserStatsDeleteArgs} args - Arguments to delete one UserStats.
     * @example
     * // Delete one UserStats
     * const UserStats = await prisma.userStats.delete({
     *   where: {
     *     // ... filter to delete one UserStats
     *   }
     * })
     * 
     */
    delete<T extends UserStatsDeleteArgs>(args: SelectSubset<T, UserStatsDeleteArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserStats.
     * @param {UserStatsUpdateArgs} args - Arguments to update one UserStats.
     * @example
     * // Update one UserStats
     * const userStats = await prisma.userStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserStatsUpdateArgs>(args: SelectSubset<T, UserStatsUpdateArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserStats.
     * @param {UserStatsDeleteManyArgs} args - Arguments to filter UserStats to delete.
     * @example
     * // Delete a few UserStats
     * const { count } = await prisma.userStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserStatsDeleteManyArgs>(args?: SelectSubset<T, UserStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserStats
     * const userStats = await prisma.userStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserStatsUpdateManyArgs>(args: SelectSubset<T, UserStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserStats and returns the data updated in the database.
     * @param {UserStatsUpdateManyAndReturnArgs} args - Arguments to update many UserStats.
     * @example
     * // Update many UserStats
     * const userStats = await prisma.userStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserStats and only return the `userId`
     * const userStatsWithUserIdOnly = await prisma.userStats.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, UserStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserStats.
     * @param {UserStatsUpsertArgs} args - Arguments to update or create a UserStats.
     * @example
     * // Update or create a UserStats
     * const userStats = await prisma.userStats.upsert({
     *   create: {
     *     // ... data to create a UserStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserStats we want to update
     *   }
     * })
     */
    upsert<T extends UserStatsUpsertArgs>(args: SelectSubset<T, UserStatsUpsertArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsCountArgs} args - Arguments to filter UserStats to count.
     * @example
     * // Count the number of UserStats
     * const count = await prisma.userStats.count({
     *   where: {
     *     // ... the filter for the UserStats we want to count
     *   }
     * })
    **/
    count<T extends UserStatsCountArgs>(
      args?: Subset<T, UserStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserStatsAggregateArgs>(args: Subset<T, UserStatsAggregateArgs>): Prisma.PrismaPromise<GetUserStatsAggregateType<T>>

    /**
     * Group by UserStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsGroupByArgs} args - Group by arguments.
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
      T extends UserStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserStatsGroupByArgs['orderBy'] }
        : { orderBy?: UserStatsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserStats model
   */
  readonly fields: UserStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserStats model
   */
  interface UserStatsFieldRefs {
    readonly userId: FieldRef<"UserStats", 'String'>
    readonly totalMatches: FieldRef<"UserStats", 'Int'>
    readonly wins: FieldRef<"UserStats", 'Int'>
    readonly losses: FieldRef<"UserStats", 'Int'>
    readonly draws: FieldRef<"UserStats", 'Int'>
    readonly winStreak: FieldRef<"UserStats", 'Int'>
    readonly bestWinStreak: FieldRef<"UserStats", 'Int'>
    readonly lastMatchAt: FieldRef<"UserStats", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserStats findUnique
   */
  export type UserStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * Filter, which UserStats to fetch.
     */
    where: UserStatsWhereUniqueInput
  }

  /**
   * UserStats findUniqueOrThrow
   */
  export type UserStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * Filter, which UserStats to fetch.
     */
    where: UserStatsWhereUniqueInput
  }

  /**
   * UserStats findFirst
   */
  export type UserStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * Filter, which UserStats to fetch.
     */
    where?: UserStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStats to fetch.
     */
    orderBy?: UserStatsOrderByWithRelationInput | UserStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStats.
     */
    cursor?: UserStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStats.
     */
    distinct?: UserStatsScalarFieldEnum | UserStatsScalarFieldEnum[]
  }

  /**
   * UserStats findFirstOrThrow
   */
  export type UserStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * Filter, which UserStats to fetch.
     */
    where?: UserStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStats to fetch.
     */
    orderBy?: UserStatsOrderByWithRelationInput | UserStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStats.
     */
    cursor?: UserStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStats.
     */
    distinct?: UserStatsScalarFieldEnum | UserStatsScalarFieldEnum[]
  }

  /**
   * UserStats findMany
   */
  export type UserStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * Filter, which UserStats to fetch.
     */
    where?: UserStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStats to fetch.
     */
    orderBy?: UserStatsOrderByWithRelationInput | UserStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserStats.
     */
    cursor?: UserStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStats.
     */
    skip?: number
    distinct?: UserStatsScalarFieldEnum | UserStatsScalarFieldEnum[]
  }

  /**
   * UserStats create
   */
  export type UserStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserStats.
     */
    data: XOR<UserStatsCreateInput, UserStatsUncheckedCreateInput>
  }

  /**
   * UserStats createMany
   */
  export type UserStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserStats.
     */
    data: UserStatsCreateManyInput | UserStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserStats createManyAndReturn
   */
  export type UserStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * The data used to create many UserStats.
     */
    data: UserStatsCreateManyInput | UserStatsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserStats update
   */
  export type UserStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserStats.
     */
    data: XOR<UserStatsUpdateInput, UserStatsUncheckedUpdateInput>
    /**
     * Choose, which UserStats to update.
     */
    where: UserStatsWhereUniqueInput
  }

  /**
   * UserStats updateMany
   */
  export type UserStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserStats.
     */
    data: XOR<UserStatsUpdateManyMutationInput, UserStatsUncheckedUpdateManyInput>
    /**
     * Filter which UserStats to update
     */
    where?: UserStatsWhereInput
    /**
     * Limit how many UserStats to update.
     */
    limit?: number
  }

  /**
   * UserStats updateManyAndReturn
   */
  export type UserStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * The data used to update UserStats.
     */
    data: XOR<UserStatsUpdateManyMutationInput, UserStatsUncheckedUpdateManyInput>
    /**
     * Filter which UserStats to update
     */
    where?: UserStatsWhereInput
    /**
     * Limit how many UserStats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserStats upsert
   */
  export type UserStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserStats to update in case it exists.
     */
    where: UserStatsWhereUniqueInput
    /**
     * In case the UserStats found by the `where` argument doesn't exist, create a new UserStats with this data.
     */
    create: XOR<UserStatsCreateInput, UserStatsUncheckedCreateInput>
    /**
     * In case the UserStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserStatsUpdateInput, UserStatsUncheckedUpdateInput>
  }

  /**
   * UserStats delete
   */
  export type UserStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * Filter which UserStats to delete.
     */
    where: UserStatsWhereUniqueInput
  }

  /**
   * UserStats deleteMany
   */
  export type UserStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStats to delete
     */
    where?: UserStatsWhereInput
    /**
     * Limit how many UserStats to delete.
     */
    limit?: number
  }

  /**
   * UserStats without action
   */
  export type UserStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    displayName: 'displayName',
    image: 'image',
    avatarUrl: 'avatarUrl',
    emailVerified: 'emailVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastOnlineAt: 'lastOnlineAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const EmailOtpScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    codeHash: 'codeHash',
    purpose: 'purpose',
    expiresAt: 'expiresAt',
    consumedAt: 'consumedAt',
    createdAt: 'createdAt'
  };

  export type EmailOtpScalarFieldEnum = (typeof EmailOtpScalarFieldEnum)[keyof typeof EmailOtpScalarFieldEnum]


  export const FriendshipScalarFieldEnum: {
    id: 'id',
    requesterId: 'requesterId',
    addresseeId: 'addresseeId',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type FriendshipScalarFieldEnum = (typeof FriendshipScalarFieldEnum)[keyof typeof FriendshipScalarFieldEnum]


  export const MatchScalarFieldEnum: {
    id: 'id',
    player1Id: 'player1Id',
    player2Id: 'player2Id',
    status: 'status',
    currentTurnUserId: 'currentTurnUserId',
    winnerUserId: 'winnerUserId',
    createdAt: 'createdAt',
    startedAt: 'startedAt',
    endedAt: 'endedAt'
  };

  export type MatchScalarFieldEnum = (typeof MatchScalarFieldEnum)[keyof typeof MatchScalarFieldEnum]


  export const BoardScalarFieldEnum: {
    id: 'id',
    matchId: 'matchId',
    userId: 'userId',
    numbers: 'numbers',
    createdAt: 'createdAt'
  };

  export type BoardScalarFieldEnum = (typeof BoardScalarFieldEnum)[keyof typeof BoardScalarFieldEnum]


  export const MoveScalarFieldEnum: {
    id: 'id',
    matchId: 'matchId',
    moveNumber: 'moveNumber',
    chosenByUserId: 'chosenByUserId',
    number: 'number',
    createdAt: 'createdAt'
  };

  export type MoveScalarFieldEnum = (typeof MoveScalarFieldEnum)[keyof typeof MoveScalarFieldEnum]


  export const UserStatsScalarFieldEnum: {
    userId: 'userId',
    totalMatches: 'totalMatches',
    wins: 'wins',
    losses: 'losses',
    draws: 'draws',
    winStreak: 'winStreak',
    bestWinStreak: 'bestWinStreak',
    lastMatchAt: 'lastMatchAt'
  };

  export type UserStatsScalarFieldEnum = (typeof UserStatsScalarFieldEnum)[keyof typeof UserStatsScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'FriendshipStatus'
   */
  export type EnumFriendshipStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FriendshipStatus'>
    


  /**
   * Reference to a field of type 'FriendshipStatus[]'
   */
  export type ListEnumFriendshipStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FriendshipStatus[]'>
    


  /**
   * Reference to a field of type 'MatchStatus'
   */
  export type EnumMatchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchStatus'>
    


  /**
   * Reference to a field of type 'MatchStatus[]'
   */
  export type ListEnumMatchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchStatus[]'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    displayName?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lastOnlineAt?: DateTimeNullableFilter<"User"> | Date | string | null
    sessions?: SessionListRelationFilter
    otpCodes?: EmailOtpListRelationFilter
    requestedFriendships?: FriendshipListRelationFilter
    receivedFriendships?: FriendshipListRelationFilter
    matchesAsPlayer1?: MatchListRelationFilter
    matchesAsPlayer2?: MatchListRelationFilter
    matchesAsCurrentTurn?: MatchListRelationFilter
    matchesWon?: MatchListRelationFilter
    boards?: BoardListRelationFilter
    moves?: MoveListRelationFilter
    userStats?: XOR<UserStatsNullableScalarRelationFilter, UserStatsWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    displayName?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastOnlineAt?: SortOrderInput | SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    otpCodes?: EmailOtpOrderByRelationAggregateInput
    requestedFriendships?: FriendshipOrderByRelationAggregateInput
    receivedFriendships?: FriendshipOrderByRelationAggregateInput
    matchesAsPlayer1?: MatchOrderByRelationAggregateInput
    matchesAsPlayer2?: MatchOrderByRelationAggregateInput
    matchesAsCurrentTurn?: MatchOrderByRelationAggregateInput
    matchesWon?: MatchOrderByRelationAggregateInput
    boards?: BoardOrderByRelationAggregateInput
    moves?: MoveOrderByRelationAggregateInput
    userStats?: UserStatsOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    name?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    displayName?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lastOnlineAt?: DateTimeNullableFilter<"User"> | Date | string | null
    sessions?: SessionListRelationFilter
    otpCodes?: EmailOtpListRelationFilter
    requestedFriendships?: FriendshipListRelationFilter
    receivedFriendships?: FriendshipListRelationFilter
    matchesAsPlayer1?: MatchListRelationFilter
    matchesAsPlayer2?: MatchListRelationFilter
    matchesAsCurrentTurn?: MatchListRelationFilter
    matchesWon?: MatchListRelationFilter
    boards?: BoardListRelationFilter
    moves?: MoveListRelationFilter
    userStats?: XOR<UserStatsNullableScalarRelationFilter, UserStatsWhereInput> | null
  }, "id" | "email" | "name">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    displayName?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastOnlineAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    displayName?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    lastOnlineAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    token?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
  }

  export type EmailOtpWhereInput = {
    AND?: EmailOtpWhereInput | EmailOtpWhereInput[]
    OR?: EmailOtpWhereInput[]
    NOT?: EmailOtpWhereInput | EmailOtpWhereInput[]
    id?: StringFilter<"EmailOtp"> | string
    userId?: StringFilter<"EmailOtp"> | string
    codeHash?: StringFilter<"EmailOtp"> | string
    purpose?: StringFilter<"EmailOtp"> | string
    expiresAt?: DateTimeFilter<"EmailOtp"> | Date | string
    consumedAt?: DateTimeNullableFilter<"EmailOtp"> | Date | string | null
    createdAt?: DateTimeFilter<"EmailOtp"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EmailOtpOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    codeHash?: SortOrder
    purpose?: SortOrder
    expiresAt?: SortOrder
    consumedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type EmailOtpWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmailOtpWhereInput | EmailOtpWhereInput[]
    OR?: EmailOtpWhereInput[]
    NOT?: EmailOtpWhereInput | EmailOtpWhereInput[]
    userId?: StringFilter<"EmailOtp"> | string
    codeHash?: StringFilter<"EmailOtp"> | string
    purpose?: StringFilter<"EmailOtp"> | string
    expiresAt?: DateTimeFilter<"EmailOtp"> | Date | string
    consumedAt?: DateTimeNullableFilter<"EmailOtp"> | Date | string | null
    createdAt?: DateTimeFilter<"EmailOtp"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type EmailOtpOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    codeHash?: SortOrder
    purpose?: SortOrder
    expiresAt?: SortOrder
    consumedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: EmailOtpCountOrderByAggregateInput
    _max?: EmailOtpMaxOrderByAggregateInput
    _min?: EmailOtpMinOrderByAggregateInput
  }

  export type EmailOtpScalarWhereWithAggregatesInput = {
    AND?: EmailOtpScalarWhereWithAggregatesInput | EmailOtpScalarWhereWithAggregatesInput[]
    OR?: EmailOtpScalarWhereWithAggregatesInput[]
    NOT?: EmailOtpScalarWhereWithAggregatesInput | EmailOtpScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmailOtp"> | string
    userId?: StringWithAggregatesFilter<"EmailOtp"> | string
    codeHash?: StringWithAggregatesFilter<"EmailOtp"> | string
    purpose?: StringWithAggregatesFilter<"EmailOtp"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"EmailOtp"> | Date | string
    consumedAt?: DateTimeNullableWithAggregatesFilter<"EmailOtp"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EmailOtp"> | Date | string
  }

  export type FriendshipWhereInput = {
    AND?: FriendshipWhereInput | FriendshipWhereInput[]
    OR?: FriendshipWhereInput[]
    NOT?: FriendshipWhereInput | FriendshipWhereInput[]
    id?: StringFilter<"Friendship"> | string
    requesterId?: StringFilter<"Friendship"> | string
    addresseeId?: StringFilter<"Friendship"> | string
    status?: EnumFriendshipStatusFilter<"Friendship"> | $Enums.FriendshipStatus
    createdAt?: DateTimeFilter<"Friendship"> | Date | string
    requester?: XOR<UserScalarRelationFilter, UserWhereInput>
    addressee?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FriendshipOrderByWithRelationInput = {
    id?: SortOrder
    requesterId?: SortOrder
    addresseeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    requester?: UserOrderByWithRelationInput
    addressee?: UserOrderByWithRelationInput
  }

  export type FriendshipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    requesterId_addresseeId?: FriendshipRequesterIdAddresseeIdCompoundUniqueInput
    AND?: FriendshipWhereInput | FriendshipWhereInput[]
    OR?: FriendshipWhereInput[]
    NOT?: FriendshipWhereInput | FriendshipWhereInput[]
    requesterId?: StringFilter<"Friendship"> | string
    addresseeId?: StringFilter<"Friendship"> | string
    status?: EnumFriendshipStatusFilter<"Friendship"> | $Enums.FriendshipStatus
    createdAt?: DateTimeFilter<"Friendship"> | Date | string
    requester?: XOR<UserScalarRelationFilter, UserWhereInput>
    addressee?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "requesterId_addresseeId">

  export type FriendshipOrderByWithAggregationInput = {
    id?: SortOrder
    requesterId?: SortOrder
    addresseeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: FriendshipCountOrderByAggregateInput
    _max?: FriendshipMaxOrderByAggregateInput
    _min?: FriendshipMinOrderByAggregateInput
  }

  export type FriendshipScalarWhereWithAggregatesInput = {
    AND?: FriendshipScalarWhereWithAggregatesInput | FriendshipScalarWhereWithAggregatesInput[]
    OR?: FriendshipScalarWhereWithAggregatesInput[]
    NOT?: FriendshipScalarWhereWithAggregatesInput | FriendshipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Friendship"> | string
    requesterId?: StringWithAggregatesFilter<"Friendship"> | string
    addresseeId?: StringWithAggregatesFilter<"Friendship"> | string
    status?: EnumFriendshipStatusWithAggregatesFilter<"Friendship"> | $Enums.FriendshipStatus
    createdAt?: DateTimeWithAggregatesFilter<"Friendship"> | Date | string
  }

  export type MatchWhereInput = {
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    id?: StringFilter<"Match"> | string
    player1Id?: StringFilter<"Match"> | string
    player2Id?: StringFilter<"Match"> | string
    status?: EnumMatchStatusFilter<"Match"> | $Enums.MatchStatus
    currentTurnUserId?: StringNullableFilter<"Match"> | string | null
    winnerUserId?: StringNullableFilter<"Match"> | string | null
    createdAt?: DateTimeFilter<"Match"> | Date | string
    startedAt?: DateTimeNullableFilter<"Match"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"Match"> | Date | string | null
    player1?: XOR<UserScalarRelationFilter, UserWhereInput>
    player2?: XOR<UserScalarRelationFilter, UserWhereInput>
    currentTurnUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    winnerUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    boards?: BoardListRelationFilter
    moves?: MoveListRelationFilter
  }

  export type MatchOrderByWithRelationInput = {
    id?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    status?: SortOrder
    currentTurnUserId?: SortOrderInput | SortOrder
    winnerUserId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    endedAt?: SortOrderInput | SortOrder
    player1?: UserOrderByWithRelationInput
    player2?: UserOrderByWithRelationInput
    currentTurnUser?: UserOrderByWithRelationInput
    winnerUser?: UserOrderByWithRelationInput
    boards?: BoardOrderByRelationAggregateInput
    moves?: MoveOrderByRelationAggregateInput
  }

  export type MatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    player1Id?: StringFilter<"Match"> | string
    player2Id?: StringFilter<"Match"> | string
    status?: EnumMatchStatusFilter<"Match"> | $Enums.MatchStatus
    currentTurnUserId?: StringNullableFilter<"Match"> | string | null
    winnerUserId?: StringNullableFilter<"Match"> | string | null
    createdAt?: DateTimeFilter<"Match"> | Date | string
    startedAt?: DateTimeNullableFilter<"Match"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"Match"> | Date | string | null
    player1?: XOR<UserScalarRelationFilter, UserWhereInput>
    player2?: XOR<UserScalarRelationFilter, UserWhereInput>
    currentTurnUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    winnerUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    boards?: BoardListRelationFilter
    moves?: MoveListRelationFilter
  }, "id">

  export type MatchOrderByWithAggregationInput = {
    id?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    status?: SortOrder
    currentTurnUserId?: SortOrderInput | SortOrder
    winnerUserId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    endedAt?: SortOrderInput | SortOrder
    _count?: MatchCountOrderByAggregateInput
    _max?: MatchMaxOrderByAggregateInput
    _min?: MatchMinOrderByAggregateInput
  }

  export type MatchScalarWhereWithAggregatesInput = {
    AND?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    OR?: MatchScalarWhereWithAggregatesInput[]
    NOT?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Match"> | string
    player1Id?: StringWithAggregatesFilter<"Match"> | string
    player2Id?: StringWithAggregatesFilter<"Match"> | string
    status?: EnumMatchStatusWithAggregatesFilter<"Match"> | $Enums.MatchStatus
    currentTurnUserId?: StringNullableWithAggregatesFilter<"Match"> | string | null
    winnerUserId?: StringNullableWithAggregatesFilter<"Match"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Match"> | Date | string
    startedAt?: DateTimeNullableWithAggregatesFilter<"Match"> | Date | string | null
    endedAt?: DateTimeNullableWithAggregatesFilter<"Match"> | Date | string | null
  }

  export type BoardWhereInput = {
    AND?: BoardWhereInput | BoardWhereInput[]
    OR?: BoardWhereInput[]
    NOT?: BoardWhereInput | BoardWhereInput[]
    id?: StringFilter<"Board"> | string
    matchId?: StringFilter<"Board"> | string
    userId?: StringFilter<"Board"> | string
    numbers?: IntNullableListFilter<"Board">
    createdAt?: DateTimeFilter<"Board"> | Date | string
    match?: XOR<MatchScalarRelationFilter, MatchWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BoardOrderByWithRelationInput = {
    id?: SortOrder
    matchId?: SortOrder
    userId?: SortOrder
    numbers?: SortOrder
    createdAt?: SortOrder
    match?: MatchOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type BoardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    matchId_userId?: BoardMatchIdUserIdCompoundUniqueInput
    AND?: BoardWhereInput | BoardWhereInput[]
    OR?: BoardWhereInput[]
    NOT?: BoardWhereInput | BoardWhereInput[]
    matchId?: StringFilter<"Board"> | string
    userId?: StringFilter<"Board"> | string
    numbers?: IntNullableListFilter<"Board">
    createdAt?: DateTimeFilter<"Board"> | Date | string
    match?: XOR<MatchScalarRelationFilter, MatchWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "matchId_userId">

  export type BoardOrderByWithAggregationInput = {
    id?: SortOrder
    matchId?: SortOrder
    userId?: SortOrder
    numbers?: SortOrder
    createdAt?: SortOrder
    _count?: BoardCountOrderByAggregateInput
    _avg?: BoardAvgOrderByAggregateInput
    _max?: BoardMaxOrderByAggregateInput
    _min?: BoardMinOrderByAggregateInput
    _sum?: BoardSumOrderByAggregateInput
  }

  export type BoardScalarWhereWithAggregatesInput = {
    AND?: BoardScalarWhereWithAggregatesInput | BoardScalarWhereWithAggregatesInput[]
    OR?: BoardScalarWhereWithAggregatesInput[]
    NOT?: BoardScalarWhereWithAggregatesInput | BoardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Board"> | string
    matchId?: StringWithAggregatesFilter<"Board"> | string
    userId?: StringWithAggregatesFilter<"Board"> | string
    numbers?: IntNullableListFilter<"Board">
    createdAt?: DateTimeWithAggregatesFilter<"Board"> | Date | string
  }

  export type MoveWhereInput = {
    AND?: MoveWhereInput | MoveWhereInput[]
    OR?: MoveWhereInput[]
    NOT?: MoveWhereInput | MoveWhereInput[]
    id?: StringFilter<"Move"> | string
    matchId?: StringFilter<"Move"> | string
    moveNumber?: IntFilter<"Move"> | number
    chosenByUserId?: StringFilter<"Move"> | string
    number?: IntFilter<"Move"> | number
    createdAt?: DateTimeFilter<"Move"> | Date | string
    match?: XOR<MatchScalarRelationFilter, MatchWhereInput>
    chosenBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MoveOrderByWithRelationInput = {
    id?: SortOrder
    matchId?: SortOrder
    moveNumber?: SortOrder
    chosenByUserId?: SortOrder
    number?: SortOrder
    createdAt?: SortOrder
    match?: MatchOrderByWithRelationInput
    chosenBy?: UserOrderByWithRelationInput
  }

  export type MoveWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    matchId_moveNumber?: MoveMatchIdMoveNumberCompoundUniqueInput
    matchId_number?: MoveMatchIdNumberCompoundUniqueInput
    AND?: MoveWhereInput | MoveWhereInput[]
    OR?: MoveWhereInput[]
    NOT?: MoveWhereInput | MoveWhereInput[]
    matchId?: StringFilter<"Move"> | string
    moveNumber?: IntFilter<"Move"> | number
    chosenByUserId?: StringFilter<"Move"> | string
    number?: IntFilter<"Move"> | number
    createdAt?: DateTimeFilter<"Move"> | Date | string
    match?: XOR<MatchScalarRelationFilter, MatchWhereInput>
    chosenBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "matchId_moveNumber" | "matchId_number">

  export type MoveOrderByWithAggregationInput = {
    id?: SortOrder
    matchId?: SortOrder
    moveNumber?: SortOrder
    chosenByUserId?: SortOrder
    number?: SortOrder
    createdAt?: SortOrder
    _count?: MoveCountOrderByAggregateInput
    _avg?: MoveAvgOrderByAggregateInput
    _max?: MoveMaxOrderByAggregateInput
    _min?: MoveMinOrderByAggregateInput
    _sum?: MoveSumOrderByAggregateInput
  }

  export type MoveScalarWhereWithAggregatesInput = {
    AND?: MoveScalarWhereWithAggregatesInput | MoveScalarWhereWithAggregatesInput[]
    OR?: MoveScalarWhereWithAggregatesInput[]
    NOT?: MoveScalarWhereWithAggregatesInput | MoveScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Move"> | string
    matchId?: StringWithAggregatesFilter<"Move"> | string
    moveNumber?: IntWithAggregatesFilter<"Move"> | number
    chosenByUserId?: StringWithAggregatesFilter<"Move"> | string
    number?: IntWithAggregatesFilter<"Move"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Move"> | Date | string
  }

  export type UserStatsWhereInput = {
    AND?: UserStatsWhereInput | UserStatsWhereInput[]
    OR?: UserStatsWhereInput[]
    NOT?: UserStatsWhereInput | UserStatsWhereInput[]
    userId?: StringFilter<"UserStats"> | string
    totalMatches?: IntFilter<"UserStats"> | number
    wins?: IntFilter<"UserStats"> | number
    losses?: IntFilter<"UserStats"> | number
    draws?: IntFilter<"UserStats"> | number
    winStreak?: IntFilter<"UserStats"> | number
    bestWinStreak?: IntFilter<"UserStats"> | number
    lastMatchAt?: DateTimeNullableFilter<"UserStats"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserStatsOrderByWithRelationInput = {
    userId?: SortOrder
    totalMatches?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    draws?: SortOrder
    winStreak?: SortOrder
    bestWinStreak?: SortOrder
    lastMatchAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserStatsWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: UserStatsWhereInput | UserStatsWhereInput[]
    OR?: UserStatsWhereInput[]
    NOT?: UserStatsWhereInput | UserStatsWhereInput[]
    totalMatches?: IntFilter<"UserStats"> | number
    wins?: IntFilter<"UserStats"> | number
    losses?: IntFilter<"UserStats"> | number
    draws?: IntFilter<"UserStats"> | number
    winStreak?: IntFilter<"UserStats"> | number
    bestWinStreak?: IntFilter<"UserStats"> | number
    lastMatchAt?: DateTimeNullableFilter<"UserStats"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId">

  export type UserStatsOrderByWithAggregationInput = {
    userId?: SortOrder
    totalMatches?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    draws?: SortOrder
    winStreak?: SortOrder
    bestWinStreak?: SortOrder
    lastMatchAt?: SortOrderInput | SortOrder
    _count?: UserStatsCountOrderByAggregateInput
    _avg?: UserStatsAvgOrderByAggregateInput
    _max?: UserStatsMaxOrderByAggregateInput
    _min?: UserStatsMinOrderByAggregateInput
    _sum?: UserStatsSumOrderByAggregateInput
  }

  export type UserStatsScalarWhereWithAggregatesInput = {
    AND?: UserStatsScalarWhereWithAggregatesInput | UserStatsScalarWhereWithAggregatesInput[]
    OR?: UserStatsScalarWhereWithAggregatesInput[]
    NOT?: UserStatsScalarWhereWithAggregatesInput | UserStatsScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserStats"> | string
    totalMatches?: IntWithAggregatesFilter<"UserStats"> | number
    wins?: IntWithAggregatesFilter<"UserStats"> | number
    losses?: IntWithAggregatesFilter<"UserStats"> | number
    draws?: IntWithAggregatesFilter<"UserStats"> | number
    winStreak?: IntWithAggregatesFilter<"UserStats"> | number
    bestWinStreak?: IntWithAggregatesFilter<"UserStats"> | number
    lastMatchAt?: DateTimeNullableWithAggregatesFilter<"UserStats"> | Date | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    displayName?: string | null
    image?: string | null
    avatarUrl?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastOnlineAt?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    otpCodes?: EmailOtpCreateNestedManyWithoutUserInput
    requestedFriendships?: FriendshipCreateNestedManyWithoutRequesterInput
    receivedFriendships?: FriendshipCreateNestedManyWithoutAddresseeInput
    matchesAsPlayer1?: MatchCreateNestedManyWithoutPlayer1Input
    matchesAsPlayer2?: MatchCreateNestedManyWithoutPlayer2Input
    matchesAsCurrentTurn?: MatchCreateNestedManyWithoutCurrentTurnUserInput
    matchesWon?: MatchCreateNestedManyWithoutWinnerUserInput
    boards?: BoardCreateNestedManyWithoutUserInput
    moves?: MoveCreateNestedManyWithoutChosenByInput
    userStats?: UserStatsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    displayName?: string | null
    image?: string | null
    avatarUrl?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastOnlineAt?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    otpCodes?: EmailOtpUncheckedCreateNestedManyWithoutUserInput
    requestedFriendships?: FriendshipUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendships?: FriendshipUncheckedCreateNestedManyWithoutAddresseeInput
    matchesAsPlayer1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    matchesAsPlayer2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
    matchesAsCurrentTurn?: MatchUncheckedCreateNestedManyWithoutCurrentTurnUserInput
    matchesWon?: MatchUncheckedCreateNestedManyWithoutWinnerUserInput
    boards?: BoardUncheckedCreateNestedManyWithoutUserInput
    moves?: MoveUncheckedCreateNestedManyWithoutChosenByInput
    userStats?: UserStatsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOnlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    otpCodes?: EmailOtpUpdateManyWithoutUserNestedInput
    requestedFriendships?: FriendshipUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: FriendshipUpdateManyWithoutAddresseeNestedInput
    matchesAsPlayer1?: MatchUpdateManyWithoutPlayer1NestedInput
    matchesAsPlayer2?: MatchUpdateManyWithoutPlayer2NestedInput
    matchesAsCurrentTurn?: MatchUpdateManyWithoutCurrentTurnUserNestedInput
    matchesWon?: MatchUpdateManyWithoutWinnerUserNestedInput
    boards?: BoardUpdateManyWithoutUserNestedInput
    moves?: MoveUpdateManyWithoutChosenByNestedInput
    userStats?: UserStatsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOnlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    otpCodes?: EmailOtpUncheckedUpdateManyWithoutUserNestedInput
    requestedFriendships?: FriendshipUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: FriendshipUncheckedUpdateManyWithoutAddresseeNestedInput
    matchesAsPlayer1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    matchesAsPlayer2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
    matchesAsCurrentTurn?: MatchUncheckedUpdateManyWithoutCurrentTurnUserNestedInput
    matchesWon?: MatchUncheckedUpdateManyWithoutWinnerUserNestedInput
    boards?: BoardUncheckedUpdateManyWithoutUserNestedInput
    moves?: MoveUncheckedUpdateManyWithoutChosenByNestedInput
    userStats?: UserStatsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    displayName?: string | null
    image?: string | null
    avatarUrl?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastOnlineAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOnlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOnlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    token: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateManyInput = {
    id?: string
    token: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailOtpCreateInput = {
    id?: string
    codeHash: string
    purpose: string
    expiresAt: Date | string
    consumedAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutOtpCodesInput
  }

  export type EmailOtpUncheckedCreateInput = {
    id?: string
    userId: string
    codeHash: string
    purpose: string
    expiresAt: Date | string
    consumedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type EmailOtpUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    codeHash?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOtpCodesNestedInput
  }

  export type EmailOtpUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    codeHash?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailOtpCreateManyInput = {
    id?: string
    userId: string
    codeHash: string
    purpose: string
    expiresAt: Date | string
    consumedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type EmailOtpUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    codeHash?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailOtpUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    codeHash?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipCreateInput = {
    id?: string
    status?: $Enums.FriendshipStatus
    createdAt?: Date | string
    requester: UserCreateNestedOneWithoutRequestedFriendshipsInput
    addressee: UserCreateNestedOneWithoutReceivedFriendshipsInput
  }

  export type FriendshipUncheckedCreateInput = {
    id?: string
    requesterId: string
    addresseeId: string
    status?: $Enums.FriendshipStatus
    createdAt?: Date | string
  }

  export type FriendshipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requester?: UserUpdateOneRequiredWithoutRequestedFriendshipsNestedInput
    addressee?: UserUpdateOneRequiredWithoutReceivedFriendshipsNestedInput
  }

  export type FriendshipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    addresseeId?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipCreateManyInput = {
    id?: string
    requesterId: string
    addresseeId: string
    status?: $Enums.FriendshipStatus
    createdAt?: Date | string
  }

  export type FriendshipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    addresseeId?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchCreateInput = {
    id?: string
    status?: $Enums.MatchStatus
    createdAt?: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    player1: UserCreateNestedOneWithoutMatchesAsPlayer1Input
    player2: UserCreateNestedOneWithoutMatchesAsPlayer2Input
    currentTurnUser?: UserCreateNestedOneWithoutMatchesAsCurrentTurnInput
    winnerUser?: UserCreateNestedOneWithoutMatchesWonInput
    boards?: BoardCreateNestedManyWithoutMatchInput
    moves?: MoveCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateInput = {
    id?: string
    player1Id: string
    player2Id: string
    status?: $Enums.MatchStatus
    currentTurnUserId?: string | null
    winnerUserId?: string | null
    createdAt?: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    boards?: BoardUncheckedCreateNestedManyWithoutMatchInput
    moves?: MoveUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    player1?: UserUpdateOneRequiredWithoutMatchesAsPlayer1NestedInput
    player2?: UserUpdateOneRequiredWithoutMatchesAsPlayer2NestedInput
    currentTurnUser?: UserUpdateOneWithoutMatchesAsCurrentTurnNestedInput
    winnerUser?: UserUpdateOneWithoutMatchesWonNestedInput
    boards?: BoardUpdateManyWithoutMatchNestedInput
    moves?: MoveUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    player2Id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    currentTurnUserId?: NullableStringFieldUpdateOperationsInput | string | null
    winnerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boards?: BoardUncheckedUpdateManyWithoutMatchNestedInput
    moves?: MoveUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MatchCreateManyInput = {
    id?: string
    player1Id: string
    player2Id: string
    status?: $Enums.MatchStatus
    currentTurnUserId?: string | null
    winnerUserId?: string | null
    createdAt?: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
  }

  export type MatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    player2Id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    currentTurnUserId?: NullableStringFieldUpdateOperationsInput | string | null
    winnerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BoardCreateInput = {
    id?: string
    numbers?: BoardCreatenumbersInput | number[]
    createdAt?: Date | string
    match: MatchCreateNestedOneWithoutBoardsInput
    user: UserCreateNestedOneWithoutBoardsInput
  }

  export type BoardUncheckedCreateInput = {
    id?: string
    matchId: string
    userId: string
    numbers?: BoardCreatenumbersInput | number[]
    createdAt?: Date | string
  }

  export type BoardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numbers?: BoardUpdatenumbersInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    match?: MatchUpdateOneRequiredWithoutBoardsNestedInput
    user?: UserUpdateOneRequiredWithoutBoardsNestedInput
  }

  export type BoardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    numbers?: BoardUpdatenumbersInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardCreateManyInput = {
    id?: string
    matchId: string
    userId: string
    numbers?: BoardCreatenumbersInput | number[]
    createdAt?: Date | string
  }

  export type BoardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    numbers?: BoardUpdatenumbersInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    numbers?: BoardUpdatenumbersInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoveCreateInput = {
    id?: string
    moveNumber: number
    number: number
    createdAt?: Date | string
    match: MatchCreateNestedOneWithoutMovesInput
    chosenBy: UserCreateNestedOneWithoutMovesInput
  }

  export type MoveUncheckedCreateInput = {
    id?: string
    matchId: string
    moveNumber: number
    chosenByUserId: string
    number: number
    createdAt?: Date | string
  }

  export type MoveUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    moveNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    match?: MatchUpdateOneRequiredWithoutMovesNestedInput
    chosenBy?: UserUpdateOneRequiredWithoutMovesNestedInput
  }

  export type MoveUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    moveNumber?: IntFieldUpdateOperationsInput | number
    chosenByUserId?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoveCreateManyInput = {
    id?: string
    matchId: string
    moveNumber: number
    chosenByUserId: string
    number: number
    createdAt?: Date | string
  }

  export type MoveUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    moveNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoveUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    moveNumber?: IntFieldUpdateOperationsInput | number
    chosenByUserId?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStatsCreateInput = {
    totalMatches?: number
    wins?: number
    losses?: number
    draws?: number
    winStreak?: number
    bestWinStreak?: number
    lastMatchAt?: Date | string | null
    user: UserCreateNestedOneWithoutUserStatsInput
  }

  export type UserStatsUncheckedCreateInput = {
    userId: string
    totalMatches?: number
    wins?: number
    losses?: number
    draws?: number
    winStreak?: number
    bestWinStreak?: number
    lastMatchAt?: Date | string | null
  }

  export type UserStatsUpdateInput = {
    totalMatches?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    winStreak?: IntFieldUpdateOperationsInput | number
    bestWinStreak?: IntFieldUpdateOperationsInput | number
    lastMatchAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutUserStatsNestedInput
  }

  export type UserStatsUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    totalMatches?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    winStreak?: IntFieldUpdateOperationsInput | number
    bestWinStreak?: IntFieldUpdateOperationsInput | number
    lastMatchAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserStatsCreateManyInput = {
    userId: string
    totalMatches?: number
    wins?: number
    losses?: number
    draws?: number
    winStreak?: number
    bestWinStreak?: number
    lastMatchAt?: Date | string | null
  }

  export type UserStatsUpdateManyMutationInput = {
    totalMatches?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    winStreak?: IntFieldUpdateOperationsInput | number
    bestWinStreak?: IntFieldUpdateOperationsInput | number
    lastMatchAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserStatsUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    totalMatches?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    winStreak?: IntFieldUpdateOperationsInput | number
    bestWinStreak?: IntFieldUpdateOperationsInput | number
    lastMatchAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type EmailOtpListRelationFilter = {
    every?: EmailOtpWhereInput
    some?: EmailOtpWhereInput
    none?: EmailOtpWhereInput
  }

  export type FriendshipListRelationFilter = {
    every?: FriendshipWhereInput
    some?: FriendshipWhereInput
    none?: FriendshipWhereInput
  }

  export type MatchListRelationFilter = {
    every?: MatchWhereInput
    some?: MatchWhereInput
    none?: MatchWhereInput
  }

  export type BoardListRelationFilter = {
    every?: BoardWhereInput
    some?: BoardWhereInput
    none?: BoardWhereInput
  }

  export type MoveListRelationFilter = {
    every?: MoveWhereInput
    some?: MoveWhereInput
    none?: MoveWhereInput
  }

  export type UserStatsNullableScalarRelationFilter = {
    is?: UserStatsWhereInput | null
    isNot?: UserStatsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmailOtpOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FriendshipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BoardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MoveOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    image?: SortOrder
    avatarUrl?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastOnlineAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    image?: SortOrder
    avatarUrl?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastOnlineAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    image?: SortOrder
    avatarUrl?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastOnlineAt?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
  }

  export type EmailOtpCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    codeHash?: SortOrder
    purpose?: SortOrder
    expiresAt?: SortOrder
    consumedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailOtpMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    codeHash?: SortOrder
    purpose?: SortOrder
    expiresAt?: SortOrder
    consumedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailOtpMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    codeHash?: SortOrder
    purpose?: SortOrder
    expiresAt?: SortOrder
    consumedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumFriendshipStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FriendshipStatus | EnumFriendshipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FriendshipStatus[] | ListEnumFriendshipStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FriendshipStatus[] | ListEnumFriendshipStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFriendshipStatusFilter<$PrismaModel> | $Enums.FriendshipStatus
  }

  export type FriendshipRequesterIdAddresseeIdCompoundUniqueInput = {
    requesterId: string
    addresseeId: string
  }

  export type FriendshipCountOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
    addresseeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type FriendshipMaxOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
    addresseeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type FriendshipMinOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
    addresseeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumFriendshipStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FriendshipStatus | EnumFriendshipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FriendshipStatus[] | ListEnumFriendshipStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FriendshipStatus[] | ListEnumFriendshipStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFriendshipStatusWithAggregatesFilter<$PrismaModel> | $Enums.FriendshipStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFriendshipStatusFilter<$PrismaModel>
    _max?: NestedEnumFriendshipStatusFilter<$PrismaModel>
  }

  export type EnumMatchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchStatusFilter<$PrismaModel> | $Enums.MatchStatus
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type MatchCountOrderByAggregateInput = {
    id?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    status?: SortOrder
    currentTurnUserId?: SortOrder
    winnerUserId?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
  }

  export type MatchMaxOrderByAggregateInput = {
    id?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    status?: SortOrder
    currentTurnUserId?: SortOrder
    winnerUserId?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
  }

  export type MatchMinOrderByAggregateInput = {
    id?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    status?: SortOrder
    currentTurnUserId?: SortOrder
    winnerUserId?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
  }

  export type EnumMatchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel> | $Enums.MatchStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchStatusFilter<$PrismaModel>
    _max?: NestedEnumMatchStatusFilter<$PrismaModel>
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type MatchScalarRelationFilter = {
    is?: MatchWhereInput
    isNot?: MatchWhereInput
  }

  export type BoardMatchIdUserIdCompoundUniqueInput = {
    matchId: string
    userId: string
  }

  export type BoardCountOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    userId?: SortOrder
    numbers?: SortOrder
    createdAt?: SortOrder
  }

  export type BoardAvgOrderByAggregateInput = {
    numbers?: SortOrder
  }

  export type BoardMaxOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type BoardMinOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type BoardSumOrderByAggregateInput = {
    numbers?: SortOrder
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

  export type MoveMatchIdMoveNumberCompoundUniqueInput = {
    matchId: string
    moveNumber: number
  }

  export type MoveMatchIdNumberCompoundUniqueInput = {
    matchId: string
    number: number
  }

  export type MoveCountOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    moveNumber?: SortOrder
    chosenByUserId?: SortOrder
    number?: SortOrder
    createdAt?: SortOrder
  }

  export type MoveAvgOrderByAggregateInput = {
    moveNumber?: SortOrder
    number?: SortOrder
  }

  export type MoveMaxOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    moveNumber?: SortOrder
    chosenByUserId?: SortOrder
    number?: SortOrder
    createdAt?: SortOrder
  }

  export type MoveMinOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    moveNumber?: SortOrder
    chosenByUserId?: SortOrder
    number?: SortOrder
    createdAt?: SortOrder
  }

  export type MoveSumOrderByAggregateInput = {
    moveNumber?: SortOrder
    number?: SortOrder
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

  export type UserStatsCountOrderByAggregateInput = {
    userId?: SortOrder
    totalMatches?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    draws?: SortOrder
    winStreak?: SortOrder
    bestWinStreak?: SortOrder
    lastMatchAt?: SortOrder
  }

  export type UserStatsAvgOrderByAggregateInput = {
    totalMatches?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    draws?: SortOrder
    winStreak?: SortOrder
    bestWinStreak?: SortOrder
  }

  export type UserStatsMaxOrderByAggregateInput = {
    userId?: SortOrder
    totalMatches?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    draws?: SortOrder
    winStreak?: SortOrder
    bestWinStreak?: SortOrder
    lastMatchAt?: SortOrder
  }

  export type UserStatsMinOrderByAggregateInput = {
    userId?: SortOrder
    totalMatches?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    draws?: SortOrder
    winStreak?: SortOrder
    bestWinStreak?: SortOrder
    lastMatchAt?: SortOrder
  }

  export type UserStatsSumOrderByAggregateInput = {
    totalMatches?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    draws?: SortOrder
    winStreak?: SortOrder
    bestWinStreak?: SortOrder
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type EmailOtpCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailOtpCreateWithoutUserInput, EmailOtpUncheckedCreateWithoutUserInput> | EmailOtpCreateWithoutUserInput[] | EmailOtpUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailOtpCreateOrConnectWithoutUserInput | EmailOtpCreateOrConnectWithoutUserInput[]
    createMany?: EmailOtpCreateManyUserInputEnvelope
    connect?: EmailOtpWhereUniqueInput | EmailOtpWhereUniqueInput[]
  }

  export type FriendshipCreateNestedManyWithoutRequesterInput = {
    create?: XOR<FriendshipCreateWithoutRequesterInput, FriendshipUncheckedCreateWithoutRequesterInput> | FriendshipCreateWithoutRequesterInput[] | FriendshipUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutRequesterInput | FriendshipCreateOrConnectWithoutRequesterInput[]
    createMany?: FriendshipCreateManyRequesterInputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type FriendshipCreateNestedManyWithoutAddresseeInput = {
    create?: XOR<FriendshipCreateWithoutAddresseeInput, FriendshipUncheckedCreateWithoutAddresseeInput> | FriendshipCreateWithoutAddresseeInput[] | FriendshipUncheckedCreateWithoutAddresseeInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutAddresseeInput | FriendshipCreateOrConnectWithoutAddresseeInput[]
    createMany?: FriendshipCreateManyAddresseeInputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutPlayer1Input = {
    create?: XOR<MatchCreateWithoutPlayer1Input, MatchUncheckedCreateWithoutPlayer1Input> | MatchCreateWithoutPlayer1Input[] | MatchUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayer1Input | MatchCreateOrConnectWithoutPlayer1Input[]
    createMany?: MatchCreateManyPlayer1InputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutPlayer2Input = {
    create?: XOR<MatchCreateWithoutPlayer2Input, MatchUncheckedCreateWithoutPlayer2Input> | MatchCreateWithoutPlayer2Input[] | MatchUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayer2Input | MatchCreateOrConnectWithoutPlayer2Input[]
    createMany?: MatchCreateManyPlayer2InputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutCurrentTurnUserInput = {
    create?: XOR<MatchCreateWithoutCurrentTurnUserInput, MatchUncheckedCreateWithoutCurrentTurnUserInput> | MatchCreateWithoutCurrentTurnUserInput[] | MatchUncheckedCreateWithoutCurrentTurnUserInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutCurrentTurnUserInput | MatchCreateOrConnectWithoutCurrentTurnUserInput[]
    createMany?: MatchCreateManyCurrentTurnUserInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutWinnerUserInput = {
    create?: XOR<MatchCreateWithoutWinnerUserInput, MatchUncheckedCreateWithoutWinnerUserInput> | MatchCreateWithoutWinnerUserInput[] | MatchUncheckedCreateWithoutWinnerUserInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerUserInput | MatchCreateOrConnectWithoutWinnerUserInput[]
    createMany?: MatchCreateManyWinnerUserInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type BoardCreateNestedManyWithoutUserInput = {
    create?: XOR<BoardCreateWithoutUserInput, BoardUncheckedCreateWithoutUserInput> | BoardCreateWithoutUserInput[] | BoardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BoardCreateOrConnectWithoutUserInput | BoardCreateOrConnectWithoutUserInput[]
    createMany?: BoardCreateManyUserInputEnvelope
    connect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
  }

  export type MoveCreateNestedManyWithoutChosenByInput = {
    create?: XOR<MoveCreateWithoutChosenByInput, MoveUncheckedCreateWithoutChosenByInput> | MoveCreateWithoutChosenByInput[] | MoveUncheckedCreateWithoutChosenByInput[]
    connectOrCreate?: MoveCreateOrConnectWithoutChosenByInput | MoveCreateOrConnectWithoutChosenByInput[]
    createMany?: MoveCreateManyChosenByInputEnvelope
    connect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
  }

  export type UserStatsCreateNestedOneWithoutUserInput = {
    create?: XOR<UserStatsCreateWithoutUserInput, UserStatsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserStatsCreateOrConnectWithoutUserInput
    connect?: UserStatsWhereUniqueInput
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type EmailOtpUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailOtpCreateWithoutUserInput, EmailOtpUncheckedCreateWithoutUserInput> | EmailOtpCreateWithoutUserInput[] | EmailOtpUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailOtpCreateOrConnectWithoutUserInput | EmailOtpCreateOrConnectWithoutUserInput[]
    createMany?: EmailOtpCreateManyUserInputEnvelope
    connect?: EmailOtpWhereUniqueInput | EmailOtpWhereUniqueInput[]
  }

  export type FriendshipUncheckedCreateNestedManyWithoutRequesterInput = {
    create?: XOR<FriendshipCreateWithoutRequesterInput, FriendshipUncheckedCreateWithoutRequesterInput> | FriendshipCreateWithoutRequesterInput[] | FriendshipUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutRequesterInput | FriendshipCreateOrConnectWithoutRequesterInput[]
    createMany?: FriendshipCreateManyRequesterInputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type FriendshipUncheckedCreateNestedManyWithoutAddresseeInput = {
    create?: XOR<FriendshipCreateWithoutAddresseeInput, FriendshipUncheckedCreateWithoutAddresseeInput> | FriendshipCreateWithoutAddresseeInput[] | FriendshipUncheckedCreateWithoutAddresseeInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutAddresseeInput | FriendshipCreateOrConnectWithoutAddresseeInput[]
    createMany?: FriendshipCreateManyAddresseeInputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutPlayer1Input = {
    create?: XOR<MatchCreateWithoutPlayer1Input, MatchUncheckedCreateWithoutPlayer1Input> | MatchCreateWithoutPlayer1Input[] | MatchUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayer1Input | MatchCreateOrConnectWithoutPlayer1Input[]
    createMany?: MatchCreateManyPlayer1InputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutPlayer2Input = {
    create?: XOR<MatchCreateWithoutPlayer2Input, MatchUncheckedCreateWithoutPlayer2Input> | MatchCreateWithoutPlayer2Input[] | MatchUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayer2Input | MatchCreateOrConnectWithoutPlayer2Input[]
    createMany?: MatchCreateManyPlayer2InputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutCurrentTurnUserInput = {
    create?: XOR<MatchCreateWithoutCurrentTurnUserInput, MatchUncheckedCreateWithoutCurrentTurnUserInput> | MatchCreateWithoutCurrentTurnUserInput[] | MatchUncheckedCreateWithoutCurrentTurnUserInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutCurrentTurnUserInput | MatchCreateOrConnectWithoutCurrentTurnUserInput[]
    createMany?: MatchCreateManyCurrentTurnUserInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutWinnerUserInput = {
    create?: XOR<MatchCreateWithoutWinnerUserInput, MatchUncheckedCreateWithoutWinnerUserInput> | MatchCreateWithoutWinnerUserInput[] | MatchUncheckedCreateWithoutWinnerUserInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerUserInput | MatchCreateOrConnectWithoutWinnerUserInput[]
    createMany?: MatchCreateManyWinnerUserInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type BoardUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BoardCreateWithoutUserInput, BoardUncheckedCreateWithoutUserInput> | BoardCreateWithoutUserInput[] | BoardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BoardCreateOrConnectWithoutUserInput | BoardCreateOrConnectWithoutUserInput[]
    createMany?: BoardCreateManyUserInputEnvelope
    connect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
  }

  export type MoveUncheckedCreateNestedManyWithoutChosenByInput = {
    create?: XOR<MoveCreateWithoutChosenByInput, MoveUncheckedCreateWithoutChosenByInput> | MoveCreateWithoutChosenByInput[] | MoveUncheckedCreateWithoutChosenByInput[]
    connectOrCreate?: MoveCreateOrConnectWithoutChosenByInput | MoveCreateOrConnectWithoutChosenByInput[]
    createMany?: MoveCreateManyChosenByInputEnvelope
    connect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
  }

  export type UserStatsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserStatsCreateWithoutUserInput, UserStatsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserStatsCreateOrConnectWithoutUserInput
    connect?: UserStatsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type EmailOtpUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailOtpCreateWithoutUserInput, EmailOtpUncheckedCreateWithoutUserInput> | EmailOtpCreateWithoutUserInput[] | EmailOtpUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailOtpCreateOrConnectWithoutUserInput | EmailOtpCreateOrConnectWithoutUserInput[]
    upsert?: EmailOtpUpsertWithWhereUniqueWithoutUserInput | EmailOtpUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailOtpCreateManyUserInputEnvelope
    set?: EmailOtpWhereUniqueInput | EmailOtpWhereUniqueInput[]
    disconnect?: EmailOtpWhereUniqueInput | EmailOtpWhereUniqueInput[]
    delete?: EmailOtpWhereUniqueInput | EmailOtpWhereUniqueInput[]
    connect?: EmailOtpWhereUniqueInput | EmailOtpWhereUniqueInput[]
    update?: EmailOtpUpdateWithWhereUniqueWithoutUserInput | EmailOtpUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailOtpUpdateManyWithWhereWithoutUserInput | EmailOtpUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailOtpScalarWhereInput | EmailOtpScalarWhereInput[]
  }

  export type FriendshipUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<FriendshipCreateWithoutRequesterInput, FriendshipUncheckedCreateWithoutRequesterInput> | FriendshipCreateWithoutRequesterInput[] | FriendshipUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutRequesterInput | FriendshipCreateOrConnectWithoutRequesterInput[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutRequesterInput | FriendshipUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: FriendshipCreateManyRequesterInputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutRequesterInput | FriendshipUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutRequesterInput | FriendshipUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type FriendshipUpdateManyWithoutAddresseeNestedInput = {
    create?: XOR<FriendshipCreateWithoutAddresseeInput, FriendshipUncheckedCreateWithoutAddresseeInput> | FriendshipCreateWithoutAddresseeInput[] | FriendshipUncheckedCreateWithoutAddresseeInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutAddresseeInput | FriendshipCreateOrConnectWithoutAddresseeInput[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutAddresseeInput | FriendshipUpsertWithWhereUniqueWithoutAddresseeInput[]
    createMany?: FriendshipCreateManyAddresseeInputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutAddresseeInput | FriendshipUpdateWithWhereUniqueWithoutAddresseeInput[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutAddresseeInput | FriendshipUpdateManyWithWhereWithoutAddresseeInput[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutPlayer1NestedInput = {
    create?: XOR<MatchCreateWithoutPlayer1Input, MatchUncheckedCreateWithoutPlayer1Input> | MatchCreateWithoutPlayer1Input[] | MatchUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayer1Input | MatchCreateOrConnectWithoutPlayer1Input[]
    upsert?: MatchUpsertWithWhereUniqueWithoutPlayer1Input | MatchUpsertWithWhereUniqueWithoutPlayer1Input[]
    createMany?: MatchCreateManyPlayer1InputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutPlayer1Input | MatchUpdateWithWhereUniqueWithoutPlayer1Input[]
    updateMany?: MatchUpdateManyWithWhereWithoutPlayer1Input | MatchUpdateManyWithWhereWithoutPlayer1Input[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutPlayer2NestedInput = {
    create?: XOR<MatchCreateWithoutPlayer2Input, MatchUncheckedCreateWithoutPlayer2Input> | MatchCreateWithoutPlayer2Input[] | MatchUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayer2Input | MatchCreateOrConnectWithoutPlayer2Input[]
    upsert?: MatchUpsertWithWhereUniqueWithoutPlayer2Input | MatchUpsertWithWhereUniqueWithoutPlayer2Input[]
    createMany?: MatchCreateManyPlayer2InputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutPlayer2Input | MatchUpdateWithWhereUniqueWithoutPlayer2Input[]
    updateMany?: MatchUpdateManyWithWhereWithoutPlayer2Input | MatchUpdateManyWithWhereWithoutPlayer2Input[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutCurrentTurnUserNestedInput = {
    create?: XOR<MatchCreateWithoutCurrentTurnUserInput, MatchUncheckedCreateWithoutCurrentTurnUserInput> | MatchCreateWithoutCurrentTurnUserInput[] | MatchUncheckedCreateWithoutCurrentTurnUserInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutCurrentTurnUserInput | MatchCreateOrConnectWithoutCurrentTurnUserInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutCurrentTurnUserInput | MatchUpsertWithWhereUniqueWithoutCurrentTurnUserInput[]
    createMany?: MatchCreateManyCurrentTurnUserInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutCurrentTurnUserInput | MatchUpdateWithWhereUniqueWithoutCurrentTurnUserInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutCurrentTurnUserInput | MatchUpdateManyWithWhereWithoutCurrentTurnUserInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutWinnerUserNestedInput = {
    create?: XOR<MatchCreateWithoutWinnerUserInput, MatchUncheckedCreateWithoutWinnerUserInput> | MatchCreateWithoutWinnerUserInput[] | MatchUncheckedCreateWithoutWinnerUserInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerUserInput | MatchCreateOrConnectWithoutWinnerUserInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutWinnerUserInput | MatchUpsertWithWhereUniqueWithoutWinnerUserInput[]
    createMany?: MatchCreateManyWinnerUserInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutWinnerUserInput | MatchUpdateWithWhereUniqueWithoutWinnerUserInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutWinnerUserInput | MatchUpdateManyWithWhereWithoutWinnerUserInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type BoardUpdateManyWithoutUserNestedInput = {
    create?: XOR<BoardCreateWithoutUserInput, BoardUncheckedCreateWithoutUserInput> | BoardCreateWithoutUserInput[] | BoardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BoardCreateOrConnectWithoutUserInput | BoardCreateOrConnectWithoutUserInput[]
    upsert?: BoardUpsertWithWhereUniqueWithoutUserInput | BoardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BoardCreateManyUserInputEnvelope
    set?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    disconnect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    delete?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    connect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    update?: BoardUpdateWithWhereUniqueWithoutUserInput | BoardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BoardUpdateManyWithWhereWithoutUserInput | BoardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BoardScalarWhereInput | BoardScalarWhereInput[]
  }

  export type MoveUpdateManyWithoutChosenByNestedInput = {
    create?: XOR<MoveCreateWithoutChosenByInput, MoveUncheckedCreateWithoutChosenByInput> | MoveCreateWithoutChosenByInput[] | MoveUncheckedCreateWithoutChosenByInput[]
    connectOrCreate?: MoveCreateOrConnectWithoutChosenByInput | MoveCreateOrConnectWithoutChosenByInput[]
    upsert?: MoveUpsertWithWhereUniqueWithoutChosenByInput | MoveUpsertWithWhereUniqueWithoutChosenByInput[]
    createMany?: MoveCreateManyChosenByInputEnvelope
    set?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    disconnect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    delete?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    connect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    update?: MoveUpdateWithWhereUniqueWithoutChosenByInput | MoveUpdateWithWhereUniqueWithoutChosenByInput[]
    updateMany?: MoveUpdateManyWithWhereWithoutChosenByInput | MoveUpdateManyWithWhereWithoutChosenByInput[]
    deleteMany?: MoveScalarWhereInput | MoveScalarWhereInput[]
  }

  export type UserStatsUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserStatsCreateWithoutUserInput, UserStatsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserStatsCreateOrConnectWithoutUserInput
    upsert?: UserStatsUpsertWithoutUserInput
    disconnect?: UserStatsWhereInput | boolean
    delete?: UserStatsWhereInput | boolean
    connect?: UserStatsWhereUniqueInput
    update?: XOR<XOR<UserStatsUpdateToOneWithWhereWithoutUserInput, UserStatsUpdateWithoutUserInput>, UserStatsUncheckedUpdateWithoutUserInput>
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type EmailOtpUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailOtpCreateWithoutUserInput, EmailOtpUncheckedCreateWithoutUserInput> | EmailOtpCreateWithoutUserInput[] | EmailOtpUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailOtpCreateOrConnectWithoutUserInput | EmailOtpCreateOrConnectWithoutUserInput[]
    upsert?: EmailOtpUpsertWithWhereUniqueWithoutUserInput | EmailOtpUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailOtpCreateManyUserInputEnvelope
    set?: EmailOtpWhereUniqueInput | EmailOtpWhereUniqueInput[]
    disconnect?: EmailOtpWhereUniqueInput | EmailOtpWhereUniqueInput[]
    delete?: EmailOtpWhereUniqueInput | EmailOtpWhereUniqueInput[]
    connect?: EmailOtpWhereUniqueInput | EmailOtpWhereUniqueInput[]
    update?: EmailOtpUpdateWithWhereUniqueWithoutUserInput | EmailOtpUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailOtpUpdateManyWithWhereWithoutUserInput | EmailOtpUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailOtpScalarWhereInput | EmailOtpScalarWhereInput[]
  }

  export type FriendshipUncheckedUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<FriendshipCreateWithoutRequesterInput, FriendshipUncheckedCreateWithoutRequesterInput> | FriendshipCreateWithoutRequesterInput[] | FriendshipUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutRequesterInput | FriendshipCreateOrConnectWithoutRequesterInput[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutRequesterInput | FriendshipUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: FriendshipCreateManyRequesterInputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutRequesterInput | FriendshipUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutRequesterInput | FriendshipUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type FriendshipUncheckedUpdateManyWithoutAddresseeNestedInput = {
    create?: XOR<FriendshipCreateWithoutAddresseeInput, FriendshipUncheckedCreateWithoutAddresseeInput> | FriendshipCreateWithoutAddresseeInput[] | FriendshipUncheckedCreateWithoutAddresseeInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutAddresseeInput | FriendshipCreateOrConnectWithoutAddresseeInput[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutAddresseeInput | FriendshipUpsertWithWhereUniqueWithoutAddresseeInput[]
    createMany?: FriendshipCreateManyAddresseeInputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutAddresseeInput | FriendshipUpdateWithWhereUniqueWithoutAddresseeInput[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutAddresseeInput | FriendshipUpdateManyWithWhereWithoutAddresseeInput[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutPlayer1NestedInput = {
    create?: XOR<MatchCreateWithoutPlayer1Input, MatchUncheckedCreateWithoutPlayer1Input> | MatchCreateWithoutPlayer1Input[] | MatchUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayer1Input | MatchCreateOrConnectWithoutPlayer1Input[]
    upsert?: MatchUpsertWithWhereUniqueWithoutPlayer1Input | MatchUpsertWithWhereUniqueWithoutPlayer1Input[]
    createMany?: MatchCreateManyPlayer1InputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutPlayer1Input | MatchUpdateWithWhereUniqueWithoutPlayer1Input[]
    updateMany?: MatchUpdateManyWithWhereWithoutPlayer1Input | MatchUpdateManyWithWhereWithoutPlayer1Input[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutPlayer2NestedInput = {
    create?: XOR<MatchCreateWithoutPlayer2Input, MatchUncheckedCreateWithoutPlayer2Input> | MatchCreateWithoutPlayer2Input[] | MatchUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayer2Input | MatchCreateOrConnectWithoutPlayer2Input[]
    upsert?: MatchUpsertWithWhereUniqueWithoutPlayer2Input | MatchUpsertWithWhereUniqueWithoutPlayer2Input[]
    createMany?: MatchCreateManyPlayer2InputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutPlayer2Input | MatchUpdateWithWhereUniqueWithoutPlayer2Input[]
    updateMany?: MatchUpdateManyWithWhereWithoutPlayer2Input | MatchUpdateManyWithWhereWithoutPlayer2Input[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutCurrentTurnUserNestedInput = {
    create?: XOR<MatchCreateWithoutCurrentTurnUserInput, MatchUncheckedCreateWithoutCurrentTurnUserInput> | MatchCreateWithoutCurrentTurnUserInput[] | MatchUncheckedCreateWithoutCurrentTurnUserInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutCurrentTurnUserInput | MatchCreateOrConnectWithoutCurrentTurnUserInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutCurrentTurnUserInput | MatchUpsertWithWhereUniqueWithoutCurrentTurnUserInput[]
    createMany?: MatchCreateManyCurrentTurnUserInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutCurrentTurnUserInput | MatchUpdateWithWhereUniqueWithoutCurrentTurnUserInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutCurrentTurnUserInput | MatchUpdateManyWithWhereWithoutCurrentTurnUserInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutWinnerUserNestedInput = {
    create?: XOR<MatchCreateWithoutWinnerUserInput, MatchUncheckedCreateWithoutWinnerUserInput> | MatchCreateWithoutWinnerUserInput[] | MatchUncheckedCreateWithoutWinnerUserInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerUserInput | MatchCreateOrConnectWithoutWinnerUserInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutWinnerUserInput | MatchUpsertWithWhereUniqueWithoutWinnerUserInput[]
    createMany?: MatchCreateManyWinnerUserInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutWinnerUserInput | MatchUpdateWithWhereUniqueWithoutWinnerUserInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutWinnerUserInput | MatchUpdateManyWithWhereWithoutWinnerUserInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type BoardUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BoardCreateWithoutUserInput, BoardUncheckedCreateWithoutUserInput> | BoardCreateWithoutUserInput[] | BoardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BoardCreateOrConnectWithoutUserInput | BoardCreateOrConnectWithoutUserInput[]
    upsert?: BoardUpsertWithWhereUniqueWithoutUserInput | BoardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BoardCreateManyUserInputEnvelope
    set?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    disconnect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    delete?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    connect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    update?: BoardUpdateWithWhereUniqueWithoutUserInput | BoardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BoardUpdateManyWithWhereWithoutUserInput | BoardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BoardScalarWhereInput | BoardScalarWhereInput[]
  }

  export type MoveUncheckedUpdateManyWithoutChosenByNestedInput = {
    create?: XOR<MoveCreateWithoutChosenByInput, MoveUncheckedCreateWithoutChosenByInput> | MoveCreateWithoutChosenByInput[] | MoveUncheckedCreateWithoutChosenByInput[]
    connectOrCreate?: MoveCreateOrConnectWithoutChosenByInput | MoveCreateOrConnectWithoutChosenByInput[]
    upsert?: MoveUpsertWithWhereUniqueWithoutChosenByInput | MoveUpsertWithWhereUniqueWithoutChosenByInput[]
    createMany?: MoveCreateManyChosenByInputEnvelope
    set?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    disconnect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    delete?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    connect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    update?: MoveUpdateWithWhereUniqueWithoutChosenByInput | MoveUpdateWithWhereUniqueWithoutChosenByInput[]
    updateMany?: MoveUpdateManyWithWhereWithoutChosenByInput | MoveUpdateManyWithWhereWithoutChosenByInput[]
    deleteMany?: MoveScalarWhereInput | MoveScalarWhereInput[]
  }

  export type UserStatsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserStatsCreateWithoutUserInput, UserStatsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserStatsCreateOrConnectWithoutUserInput
    upsert?: UserStatsUpsertWithoutUserInput
    disconnect?: UserStatsWhereInput | boolean
    delete?: UserStatsWhereInput | boolean
    connect?: UserStatsWhereUniqueInput
    update?: XOR<XOR<UserStatsUpdateToOneWithWhereWithoutUserInput, UserStatsUpdateWithoutUserInput>, UserStatsUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutOtpCodesInput = {
    create?: XOR<UserCreateWithoutOtpCodesInput, UserUncheckedCreateWithoutOtpCodesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOtpCodesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutOtpCodesNestedInput = {
    create?: XOR<UserCreateWithoutOtpCodesInput, UserUncheckedCreateWithoutOtpCodesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOtpCodesInput
    upsert?: UserUpsertWithoutOtpCodesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOtpCodesInput, UserUpdateWithoutOtpCodesInput>, UserUncheckedUpdateWithoutOtpCodesInput>
  }

  export type UserCreateNestedOneWithoutRequestedFriendshipsInput = {
    create?: XOR<UserCreateWithoutRequestedFriendshipsInput, UserUncheckedCreateWithoutRequestedFriendshipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestedFriendshipsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedFriendshipsInput = {
    create?: XOR<UserCreateWithoutReceivedFriendshipsInput, UserUncheckedCreateWithoutReceivedFriendshipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedFriendshipsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumFriendshipStatusFieldUpdateOperationsInput = {
    set?: $Enums.FriendshipStatus
  }

  export type UserUpdateOneRequiredWithoutRequestedFriendshipsNestedInput = {
    create?: XOR<UserCreateWithoutRequestedFriendshipsInput, UserUncheckedCreateWithoutRequestedFriendshipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestedFriendshipsInput
    upsert?: UserUpsertWithoutRequestedFriendshipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRequestedFriendshipsInput, UserUpdateWithoutRequestedFriendshipsInput>, UserUncheckedUpdateWithoutRequestedFriendshipsInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedFriendshipsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedFriendshipsInput, UserUncheckedCreateWithoutReceivedFriendshipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedFriendshipsInput
    upsert?: UserUpsertWithoutReceivedFriendshipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedFriendshipsInput, UserUpdateWithoutReceivedFriendshipsInput>, UserUncheckedUpdateWithoutReceivedFriendshipsInput>
  }

  export type UserCreateNestedOneWithoutMatchesAsPlayer1Input = {
    create?: XOR<UserCreateWithoutMatchesAsPlayer1Input, UserUncheckedCreateWithoutMatchesAsPlayer1Input>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesAsPlayer1Input
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMatchesAsPlayer2Input = {
    create?: XOR<UserCreateWithoutMatchesAsPlayer2Input, UserUncheckedCreateWithoutMatchesAsPlayer2Input>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesAsPlayer2Input
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMatchesAsCurrentTurnInput = {
    create?: XOR<UserCreateWithoutMatchesAsCurrentTurnInput, UserUncheckedCreateWithoutMatchesAsCurrentTurnInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesAsCurrentTurnInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMatchesWonInput = {
    create?: XOR<UserCreateWithoutMatchesWonInput, UserUncheckedCreateWithoutMatchesWonInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesWonInput
    connect?: UserWhereUniqueInput
  }

  export type BoardCreateNestedManyWithoutMatchInput = {
    create?: XOR<BoardCreateWithoutMatchInput, BoardUncheckedCreateWithoutMatchInput> | BoardCreateWithoutMatchInput[] | BoardUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: BoardCreateOrConnectWithoutMatchInput | BoardCreateOrConnectWithoutMatchInput[]
    createMany?: BoardCreateManyMatchInputEnvelope
    connect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
  }

  export type MoveCreateNestedManyWithoutMatchInput = {
    create?: XOR<MoveCreateWithoutMatchInput, MoveUncheckedCreateWithoutMatchInput> | MoveCreateWithoutMatchInput[] | MoveUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MoveCreateOrConnectWithoutMatchInput | MoveCreateOrConnectWithoutMatchInput[]
    createMany?: MoveCreateManyMatchInputEnvelope
    connect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
  }

  export type BoardUncheckedCreateNestedManyWithoutMatchInput = {
    create?: XOR<BoardCreateWithoutMatchInput, BoardUncheckedCreateWithoutMatchInput> | BoardCreateWithoutMatchInput[] | BoardUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: BoardCreateOrConnectWithoutMatchInput | BoardCreateOrConnectWithoutMatchInput[]
    createMany?: BoardCreateManyMatchInputEnvelope
    connect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
  }

  export type MoveUncheckedCreateNestedManyWithoutMatchInput = {
    create?: XOR<MoveCreateWithoutMatchInput, MoveUncheckedCreateWithoutMatchInput> | MoveCreateWithoutMatchInput[] | MoveUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MoveCreateOrConnectWithoutMatchInput | MoveCreateOrConnectWithoutMatchInput[]
    createMany?: MoveCreateManyMatchInputEnvelope
    connect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
  }

  export type EnumMatchStatusFieldUpdateOperationsInput = {
    set?: $Enums.MatchStatus
  }

  export type UserUpdateOneRequiredWithoutMatchesAsPlayer1NestedInput = {
    create?: XOR<UserCreateWithoutMatchesAsPlayer1Input, UserUncheckedCreateWithoutMatchesAsPlayer1Input>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesAsPlayer1Input
    upsert?: UserUpsertWithoutMatchesAsPlayer1Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchesAsPlayer1Input, UserUpdateWithoutMatchesAsPlayer1Input>, UserUncheckedUpdateWithoutMatchesAsPlayer1Input>
  }

  export type UserUpdateOneRequiredWithoutMatchesAsPlayer2NestedInput = {
    create?: XOR<UserCreateWithoutMatchesAsPlayer2Input, UserUncheckedCreateWithoutMatchesAsPlayer2Input>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesAsPlayer2Input
    upsert?: UserUpsertWithoutMatchesAsPlayer2Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchesAsPlayer2Input, UserUpdateWithoutMatchesAsPlayer2Input>, UserUncheckedUpdateWithoutMatchesAsPlayer2Input>
  }

  export type UserUpdateOneWithoutMatchesAsCurrentTurnNestedInput = {
    create?: XOR<UserCreateWithoutMatchesAsCurrentTurnInput, UserUncheckedCreateWithoutMatchesAsCurrentTurnInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesAsCurrentTurnInput
    upsert?: UserUpsertWithoutMatchesAsCurrentTurnInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchesAsCurrentTurnInput, UserUpdateWithoutMatchesAsCurrentTurnInput>, UserUncheckedUpdateWithoutMatchesAsCurrentTurnInput>
  }

  export type UserUpdateOneWithoutMatchesWonNestedInput = {
    create?: XOR<UserCreateWithoutMatchesWonInput, UserUncheckedCreateWithoutMatchesWonInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesWonInput
    upsert?: UserUpsertWithoutMatchesWonInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchesWonInput, UserUpdateWithoutMatchesWonInput>, UserUncheckedUpdateWithoutMatchesWonInput>
  }

  export type BoardUpdateManyWithoutMatchNestedInput = {
    create?: XOR<BoardCreateWithoutMatchInput, BoardUncheckedCreateWithoutMatchInput> | BoardCreateWithoutMatchInput[] | BoardUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: BoardCreateOrConnectWithoutMatchInput | BoardCreateOrConnectWithoutMatchInput[]
    upsert?: BoardUpsertWithWhereUniqueWithoutMatchInput | BoardUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: BoardCreateManyMatchInputEnvelope
    set?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    disconnect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    delete?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    connect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    update?: BoardUpdateWithWhereUniqueWithoutMatchInput | BoardUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: BoardUpdateManyWithWhereWithoutMatchInput | BoardUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: BoardScalarWhereInput | BoardScalarWhereInput[]
  }

  export type MoveUpdateManyWithoutMatchNestedInput = {
    create?: XOR<MoveCreateWithoutMatchInput, MoveUncheckedCreateWithoutMatchInput> | MoveCreateWithoutMatchInput[] | MoveUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MoveCreateOrConnectWithoutMatchInput | MoveCreateOrConnectWithoutMatchInput[]
    upsert?: MoveUpsertWithWhereUniqueWithoutMatchInput | MoveUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: MoveCreateManyMatchInputEnvelope
    set?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    disconnect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    delete?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    connect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    update?: MoveUpdateWithWhereUniqueWithoutMatchInput | MoveUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: MoveUpdateManyWithWhereWithoutMatchInput | MoveUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: MoveScalarWhereInput | MoveScalarWhereInput[]
  }

  export type BoardUncheckedUpdateManyWithoutMatchNestedInput = {
    create?: XOR<BoardCreateWithoutMatchInput, BoardUncheckedCreateWithoutMatchInput> | BoardCreateWithoutMatchInput[] | BoardUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: BoardCreateOrConnectWithoutMatchInput | BoardCreateOrConnectWithoutMatchInput[]
    upsert?: BoardUpsertWithWhereUniqueWithoutMatchInput | BoardUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: BoardCreateManyMatchInputEnvelope
    set?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    disconnect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    delete?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    connect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    update?: BoardUpdateWithWhereUniqueWithoutMatchInput | BoardUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: BoardUpdateManyWithWhereWithoutMatchInput | BoardUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: BoardScalarWhereInput | BoardScalarWhereInput[]
  }

  export type MoveUncheckedUpdateManyWithoutMatchNestedInput = {
    create?: XOR<MoveCreateWithoutMatchInput, MoveUncheckedCreateWithoutMatchInput> | MoveCreateWithoutMatchInput[] | MoveUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MoveCreateOrConnectWithoutMatchInput | MoveCreateOrConnectWithoutMatchInput[]
    upsert?: MoveUpsertWithWhereUniqueWithoutMatchInput | MoveUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: MoveCreateManyMatchInputEnvelope
    set?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    disconnect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    delete?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    connect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    update?: MoveUpdateWithWhereUniqueWithoutMatchInput | MoveUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: MoveUpdateManyWithWhereWithoutMatchInput | MoveUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: MoveScalarWhereInput | MoveScalarWhereInput[]
  }

  export type BoardCreatenumbersInput = {
    set: number[]
  }

  export type MatchCreateNestedOneWithoutBoardsInput = {
    create?: XOR<MatchCreateWithoutBoardsInput, MatchUncheckedCreateWithoutBoardsInput>
    connectOrCreate?: MatchCreateOrConnectWithoutBoardsInput
    connect?: MatchWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBoardsInput = {
    create?: XOR<UserCreateWithoutBoardsInput, UserUncheckedCreateWithoutBoardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoardsInput
    connect?: UserWhereUniqueInput
  }

  export type BoardUpdatenumbersInput = {
    set?: number[]
    push?: number | number[]
  }

  export type MatchUpdateOneRequiredWithoutBoardsNestedInput = {
    create?: XOR<MatchCreateWithoutBoardsInput, MatchUncheckedCreateWithoutBoardsInput>
    connectOrCreate?: MatchCreateOrConnectWithoutBoardsInput
    upsert?: MatchUpsertWithoutBoardsInput
    connect?: MatchWhereUniqueInput
    update?: XOR<XOR<MatchUpdateToOneWithWhereWithoutBoardsInput, MatchUpdateWithoutBoardsInput>, MatchUncheckedUpdateWithoutBoardsInput>
  }

  export type UserUpdateOneRequiredWithoutBoardsNestedInput = {
    create?: XOR<UserCreateWithoutBoardsInput, UserUncheckedCreateWithoutBoardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoardsInput
    upsert?: UserUpsertWithoutBoardsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBoardsInput, UserUpdateWithoutBoardsInput>, UserUncheckedUpdateWithoutBoardsInput>
  }

  export type MatchCreateNestedOneWithoutMovesInput = {
    create?: XOR<MatchCreateWithoutMovesInput, MatchUncheckedCreateWithoutMovesInput>
    connectOrCreate?: MatchCreateOrConnectWithoutMovesInput
    connect?: MatchWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMovesInput = {
    create?: XOR<UserCreateWithoutMovesInput, UserUncheckedCreateWithoutMovesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMovesInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MatchUpdateOneRequiredWithoutMovesNestedInput = {
    create?: XOR<MatchCreateWithoutMovesInput, MatchUncheckedCreateWithoutMovesInput>
    connectOrCreate?: MatchCreateOrConnectWithoutMovesInput
    upsert?: MatchUpsertWithoutMovesInput
    connect?: MatchWhereUniqueInput
    update?: XOR<XOR<MatchUpdateToOneWithWhereWithoutMovesInput, MatchUpdateWithoutMovesInput>, MatchUncheckedUpdateWithoutMovesInput>
  }

  export type UserUpdateOneRequiredWithoutMovesNestedInput = {
    create?: XOR<UserCreateWithoutMovesInput, UserUncheckedCreateWithoutMovesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMovesInput
    upsert?: UserUpsertWithoutMovesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMovesInput, UserUpdateWithoutMovesInput>, UserUncheckedUpdateWithoutMovesInput>
  }

  export type UserCreateNestedOneWithoutUserStatsInput = {
    create?: XOR<UserCreateWithoutUserStatsInput, UserUncheckedCreateWithoutUserStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserStatsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserStatsNestedInput = {
    create?: XOR<UserCreateWithoutUserStatsInput, UserUncheckedCreateWithoutUserStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserStatsInput
    upsert?: UserUpsertWithoutUserStatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserStatsInput, UserUpdateWithoutUserStatsInput>, UserUncheckedUpdateWithoutUserStatsInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumFriendshipStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FriendshipStatus | EnumFriendshipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FriendshipStatus[] | ListEnumFriendshipStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FriendshipStatus[] | ListEnumFriendshipStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFriendshipStatusFilter<$PrismaModel> | $Enums.FriendshipStatus
  }

  export type NestedEnumFriendshipStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FriendshipStatus | EnumFriendshipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FriendshipStatus[] | ListEnumFriendshipStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FriendshipStatus[] | ListEnumFriendshipStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFriendshipStatusWithAggregatesFilter<$PrismaModel> | $Enums.FriendshipStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFriendshipStatusFilter<$PrismaModel>
    _max?: NestedEnumFriendshipStatusFilter<$PrismaModel>
  }

  export type NestedEnumMatchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchStatusFilter<$PrismaModel> | $Enums.MatchStatus
  }

  export type NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel> | $Enums.MatchStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchStatusFilter<$PrismaModel>
    _max?: NestedEnumMatchStatusFilter<$PrismaModel>
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

  export type SessionCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EmailOtpCreateWithoutUserInput = {
    id?: string
    codeHash: string
    purpose: string
    expiresAt: Date | string
    consumedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type EmailOtpUncheckedCreateWithoutUserInput = {
    id?: string
    codeHash: string
    purpose: string
    expiresAt: Date | string
    consumedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type EmailOtpCreateOrConnectWithoutUserInput = {
    where: EmailOtpWhereUniqueInput
    create: XOR<EmailOtpCreateWithoutUserInput, EmailOtpUncheckedCreateWithoutUserInput>
  }

  export type EmailOtpCreateManyUserInputEnvelope = {
    data: EmailOtpCreateManyUserInput | EmailOtpCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FriendshipCreateWithoutRequesterInput = {
    id?: string
    status?: $Enums.FriendshipStatus
    createdAt?: Date | string
    addressee: UserCreateNestedOneWithoutReceivedFriendshipsInput
  }

  export type FriendshipUncheckedCreateWithoutRequesterInput = {
    id?: string
    addresseeId: string
    status?: $Enums.FriendshipStatus
    createdAt?: Date | string
  }

  export type FriendshipCreateOrConnectWithoutRequesterInput = {
    where: FriendshipWhereUniqueInput
    create: XOR<FriendshipCreateWithoutRequesterInput, FriendshipUncheckedCreateWithoutRequesterInput>
  }

  export type FriendshipCreateManyRequesterInputEnvelope = {
    data: FriendshipCreateManyRequesterInput | FriendshipCreateManyRequesterInput[]
    skipDuplicates?: boolean
  }

  export type FriendshipCreateWithoutAddresseeInput = {
    id?: string
    status?: $Enums.FriendshipStatus
    createdAt?: Date | string
    requester: UserCreateNestedOneWithoutRequestedFriendshipsInput
  }

  export type FriendshipUncheckedCreateWithoutAddresseeInput = {
    id?: string
    requesterId: string
    status?: $Enums.FriendshipStatus
    createdAt?: Date | string
  }

  export type FriendshipCreateOrConnectWithoutAddresseeInput = {
    where: FriendshipWhereUniqueInput
    create: XOR<FriendshipCreateWithoutAddresseeInput, FriendshipUncheckedCreateWithoutAddresseeInput>
  }

  export type FriendshipCreateManyAddresseeInputEnvelope = {
    data: FriendshipCreateManyAddresseeInput | FriendshipCreateManyAddresseeInput[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutPlayer1Input = {
    id?: string
    status?: $Enums.MatchStatus
    createdAt?: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    player2: UserCreateNestedOneWithoutMatchesAsPlayer2Input
    currentTurnUser?: UserCreateNestedOneWithoutMatchesAsCurrentTurnInput
    winnerUser?: UserCreateNestedOneWithoutMatchesWonInput
    boards?: BoardCreateNestedManyWithoutMatchInput
    moves?: MoveCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutPlayer1Input = {
    id?: string
    player2Id: string
    status?: $Enums.MatchStatus
    currentTurnUserId?: string | null
    winnerUserId?: string | null
    createdAt?: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    boards?: BoardUncheckedCreateNestedManyWithoutMatchInput
    moves?: MoveUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutPlayer1Input = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutPlayer1Input, MatchUncheckedCreateWithoutPlayer1Input>
  }

  export type MatchCreateManyPlayer1InputEnvelope = {
    data: MatchCreateManyPlayer1Input | MatchCreateManyPlayer1Input[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutPlayer2Input = {
    id?: string
    status?: $Enums.MatchStatus
    createdAt?: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    player1: UserCreateNestedOneWithoutMatchesAsPlayer1Input
    currentTurnUser?: UserCreateNestedOneWithoutMatchesAsCurrentTurnInput
    winnerUser?: UserCreateNestedOneWithoutMatchesWonInput
    boards?: BoardCreateNestedManyWithoutMatchInput
    moves?: MoveCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutPlayer2Input = {
    id?: string
    player1Id: string
    status?: $Enums.MatchStatus
    currentTurnUserId?: string | null
    winnerUserId?: string | null
    createdAt?: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    boards?: BoardUncheckedCreateNestedManyWithoutMatchInput
    moves?: MoveUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutPlayer2Input = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutPlayer2Input, MatchUncheckedCreateWithoutPlayer2Input>
  }

  export type MatchCreateManyPlayer2InputEnvelope = {
    data: MatchCreateManyPlayer2Input | MatchCreateManyPlayer2Input[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutCurrentTurnUserInput = {
    id?: string
    status?: $Enums.MatchStatus
    createdAt?: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    player1: UserCreateNestedOneWithoutMatchesAsPlayer1Input
    player2: UserCreateNestedOneWithoutMatchesAsPlayer2Input
    winnerUser?: UserCreateNestedOneWithoutMatchesWonInput
    boards?: BoardCreateNestedManyWithoutMatchInput
    moves?: MoveCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutCurrentTurnUserInput = {
    id?: string
    player1Id: string
    player2Id: string
    status?: $Enums.MatchStatus
    winnerUserId?: string | null
    createdAt?: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    boards?: BoardUncheckedCreateNestedManyWithoutMatchInput
    moves?: MoveUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutCurrentTurnUserInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutCurrentTurnUserInput, MatchUncheckedCreateWithoutCurrentTurnUserInput>
  }

  export type MatchCreateManyCurrentTurnUserInputEnvelope = {
    data: MatchCreateManyCurrentTurnUserInput | MatchCreateManyCurrentTurnUserInput[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutWinnerUserInput = {
    id?: string
    status?: $Enums.MatchStatus
    createdAt?: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    player1: UserCreateNestedOneWithoutMatchesAsPlayer1Input
    player2: UserCreateNestedOneWithoutMatchesAsPlayer2Input
    currentTurnUser?: UserCreateNestedOneWithoutMatchesAsCurrentTurnInput
    boards?: BoardCreateNestedManyWithoutMatchInput
    moves?: MoveCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutWinnerUserInput = {
    id?: string
    player1Id: string
    player2Id: string
    status?: $Enums.MatchStatus
    currentTurnUserId?: string | null
    createdAt?: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    boards?: BoardUncheckedCreateNestedManyWithoutMatchInput
    moves?: MoveUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutWinnerUserInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutWinnerUserInput, MatchUncheckedCreateWithoutWinnerUserInput>
  }

  export type MatchCreateManyWinnerUserInputEnvelope = {
    data: MatchCreateManyWinnerUserInput | MatchCreateManyWinnerUserInput[]
    skipDuplicates?: boolean
  }

  export type BoardCreateWithoutUserInput = {
    id?: string
    numbers?: BoardCreatenumbersInput | number[]
    createdAt?: Date | string
    match: MatchCreateNestedOneWithoutBoardsInput
  }

  export type BoardUncheckedCreateWithoutUserInput = {
    id?: string
    matchId: string
    numbers?: BoardCreatenumbersInput | number[]
    createdAt?: Date | string
  }

  export type BoardCreateOrConnectWithoutUserInput = {
    where: BoardWhereUniqueInput
    create: XOR<BoardCreateWithoutUserInput, BoardUncheckedCreateWithoutUserInput>
  }

  export type BoardCreateManyUserInputEnvelope = {
    data: BoardCreateManyUserInput | BoardCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MoveCreateWithoutChosenByInput = {
    id?: string
    moveNumber: number
    number: number
    createdAt?: Date | string
    match: MatchCreateNestedOneWithoutMovesInput
  }

  export type MoveUncheckedCreateWithoutChosenByInput = {
    id?: string
    matchId: string
    moveNumber: number
    number: number
    createdAt?: Date | string
  }

  export type MoveCreateOrConnectWithoutChosenByInput = {
    where: MoveWhereUniqueInput
    create: XOR<MoveCreateWithoutChosenByInput, MoveUncheckedCreateWithoutChosenByInput>
  }

  export type MoveCreateManyChosenByInputEnvelope = {
    data: MoveCreateManyChosenByInput | MoveCreateManyChosenByInput[]
    skipDuplicates?: boolean
  }

  export type UserStatsCreateWithoutUserInput = {
    totalMatches?: number
    wins?: number
    losses?: number
    draws?: number
    winStreak?: number
    bestWinStreak?: number
    lastMatchAt?: Date | string | null
  }

  export type UserStatsUncheckedCreateWithoutUserInput = {
    totalMatches?: number
    wins?: number
    losses?: number
    draws?: number
    winStreak?: number
    bestWinStreak?: number
    lastMatchAt?: Date | string | null
  }

  export type UserStatsCreateOrConnectWithoutUserInput = {
    where: UserStatsWhereUniqueInput
    create: XOR<UserStatsCreateWithoutUserInput, UserStatsUncheckedCreateWithoutUserInput>
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
  }

  export type EmailOtpUpsertWithWhereUniqueWithoutUserInput = {
    where: EmailOtpWhereUniqueInput
    update: XOR<EmailOtpUpdateWithoutUserInput, EmailOtpUncheckedUpdateWithoutUserInput>
    create: XOR<EmailOtpCreateWithoutUserInput, EmailOtpUncheckedCreateWithoutUserInput>
  }

  export type EmailOtpUpdateWithWhereUniqueWithoutUserInput = {
    where: EmailOtpWhereUniqueInput
    data: XOR<EmailOtpUpdateWithoutUserInput, EmailOtpUncheckedUpdateWithoutUserInput>
  }

  export type EmailOtpUpdateManyWithWhereWithoutUserInput = {
    where: EmailOtpScalarWhereInput
    data: XOR<EmailOtpUpdateManyMutationInput, EmailOtpUncheckedUpdateManyWithoutUserInput>
  }

  export type EmailOtpScalarWhereInput = {
    AND?: EmailOtpScalarWhereInput | EmailOtpScalarWhereInput[]
    OR?: EmailOtpScalarWhereInput[]
    NOT?: EmailOtpScalarWhereInput | EmailOtpScalarWhereInput[]
    id?: StringFilter<"EmailOtp"> | string
    userId?: StringFilter<"EmailOtp"> | string
    codeHash?: StringFilter<"EmailOtp"> | string
    purpose?: StringFilter<"EmailOtp"> | string
    expiresAt?: DateTimeFilter<"EmailOtp"> | Date | string
    consumedAt?: DateTimeNullableFilter<"EmailOtp"> | Date | string | null
    createdAt?: DateTimeFilter<"EmailOtp"> | Date | string
  }

  export type FriendshipUpsertWithWhereUniqueWithoutRequesterInput = {
    where: FriendshipWhereUniqueInput
    update: XOR<FriendshipUpdateWithoutRequesterInput, FriendshipUncheckedUpdateWithoutRequesterInput>
    create: XOR<FriendshipCreateWithoutRequesterInput, FriendshipUncheckedCreateWithoutRequesterInput>
  }

  export type FriendshipUpdateWithWhereUniqueWithoutRequesterInput = {
    where: FriendshipWhereUniqueInput
    data: XOR<FriendshipUpdateWithoutRequesterInput, FriendshipUncheckedUpdateWithoutRequesterInput>
  }

  export type FriendshipUpdateManyWithWhereWithoutRequesterInput = {
    where: FriendshipScalarWhereInput
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyWithoutRequesterInput>
  }

  export type FriendshipScalarWhereInput = {
    AND?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
    OR?: FriendshipScalarWhereInput[]
    NOT?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
    id?: StringFilter<"Friendship"> | string
    requesterId?: StringFilter<"Friendship"> | string
    addresseeId?: StringFilter<"Friendship"> | string
    status?: EnumFriendshipStatusFilter<"Friendship"> | $Enums.FriendshipStatus
    createdAt?: DateTimeFilter<"Friendship"> | Date | string
  }

  export type FriendshipUpsertWithWhereUniqueWithoutAddresseeInput = {
    where: FriendshipWhereUniqueInput
    update: XOR<FriendshipUpdateWithoutAddresseeInput, FriendshipUncheckedUpdateWithoutAddresseeInput>
    create: XOR<FriendshipCreateWithoutAddresseeInput, FriendshipUncheckedCreateWithoutAddresseeInput>
  }

  export type FriendshipUpdateWithWhereUniqueWithoutAddresseeInput = {
    where: FriendshipWhereUniqueInput
    data: XOR<FriendshipUpdateWithoutAddresseeInput, FriendshipUncheckedUpdateWithoutAddresseeInput>
  }

  export type FriendshipUpdateManyWithWhereWithoutAddresseeInput = {
    where: FriendshipScalarWhereInput
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyWithoutAddresseeInput>
  }

  export type MatchUpsertWithWhereUniqueWithoutPlayer1Input = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutPlayer1Input, MatchUncheckedUpdateWithoutPlayer1Input>
    create: XOR<MatchCreateWithoutPlayer1Input, MatchUncheckedCreateWithoutPlayer1Input>
  }

  export type MatchUpdateWithWhereUniqueWithoutPlayer1Input = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutPlayer1Input, MatchUncheckedUpdateWithoutPlayer1Input>
  }

  export type MatchUpdateManyWithWhereWithoutPlayer1Input = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutPlayer1Input>
  }

  export type MatchScalarWhereInput = {
    AND?: MatchScalarWhereInput | MatchScalarWhereInput[]
    OR?: MatchScalarWhereInput[]
    NOT?: MatchScalarWhereInput | MatchScalarWhereInput[]
    id?: StringFilter<"Match"> | string
    player1Id?: StringFilter<"Match"> | string
    player2Id?: StringFilter<"Match"> | string
    status?: EnumMatchStatusFilter<"Match"> | $Enums.MatchStatus
    currentTurnUserId?: StringNullableFilter<"Match"> | string | null
    winnerUserId?: StringNullableFilter<"Match"> | string | null
    createdAt?: DateTimeFilter<"Match"> | Date | string
    startedAt?: DateTimeNullableFilter<"Match"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"Match"> | Date | string | null
  }

  export type MatchUpsertWithWhereUniqueWithoutPlayer2Input = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutPlayer2Input, MatchUncheckedUpdateWithoutPlayer2Input>
    create: XOR<MatchCreateWithoutPlayer2Input, MatchUncheckedCreateWithoutPlayer2Input>
  }

  export type MatchUpdateWithWhereUniqueWithoutPlayer2Input = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutPlayer2Input, MatchUncheckedUpdateWithoutPlayer2Input>
  }

  export type MatchUpdateManyWithWhereWithoutPlayer2Input = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutPlayer2Input>
  }

  export type MatchUpsertWithWhereUniqueWithoutCurrentTurnUserInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutCurrentTurnUserInput, MatchUncheckedUpdateWithoutCurrentTurnUserInput>
    create: XOR<MatchCreateWithoutCurrentTurnUserInput, MatchUncheckedCreateWithoutCurrentTurnUserInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutCurrentTurnUserInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutCurrentTurnUserInput, MatchUncheckedUpdateWithoutCurrentTurnUserInput>
  }

  export type MatchUpdateManyWithWhereWithoutCurrentTurnUserInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutCurrentTurnUserInput>
  }

  export type MatchUpsertWithWhereUniqueWithoutWinnerUserInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutWinnerUserInput, MatchUncheckedUpdateWithoutWinnerUserInput>
    create: XOR<MatchCreateWithoutWinnerUserInput, MatchUncheckedCreateWithoutWinnerUserInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutWinnerUserInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutWinnerUserInput, MatchUncheckedUpdateWithoutWinnerUserInput>
  }

  export type MatchUpdateManyWithWhereWithoutWinnerUserInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutWinnerUserInput>
  }

  export type BoardUpsertWithWhereUniqueWithoutUserInput = {
    where: BoardWhereUniqueInput
    update: XOR<BoardUpdateWithoutUserInput, BoardUncheckedUpdateWithoutUserInput>
    create: XOR<BoardCreateWithoutUserInput, BoardUncheckedCreateWithoutUserInput>
  }

  export type BoardUpdateWithWhereUniqueWithoutUserInput = {
    where: BoardWhereUniqueInput
    data: XOR<BoardUpdateWithoutUserInput, BoardUncheckedUpdateWithoutUserInput>
  }

  export type BoardUpdateManyWithWhereWithoutUserInput = {
    where: BoardScalarWhereInput
    data: XOR<BoardUpdateManyMutationInput, BoardUncheckedUpdateManyWithoutUserInput>
  }

  export type BoardScalarWhereInput = {
    AND?: BoardScalarWhereInput | BoardScalarWhereInput[]
    OR?: BoardScalarWhereInput[]
    NOT?: BoardScalarWhereInput | BoardScalarWhereInput[]
    id?: StringFilter<"Board"> | string
    matchId?: StringFilter<"Board"> | string
    userId?: StringFilter<"Board"> | string
    numbers?: IntNullableListFilter<"Board">
    createdAt?: DateTimeFilter<"Board"> | Date | string
  }

  export type MoveUpsertWithWhereUniqueWithoutChosenByInput = {
    where: MoveWhereUniqueInput
    update: XOR<MoveUpdateWithoutChosenByInput, MoveUncheckedUpdateWithoutChosenByInput>
    create: XOR<MoveCreateWithoutChosenByInput, MoveUncheckedCreateWithoutChosenByInput>
  }

  export type MoveUpdateWithWhereUniqueWithoutChosenByInput = {
    where: MoveWhereUniqueInput
    data: XOR<MoveUpdateWithoutChosenByInput, MoveUncheckedUpdateWithoutChosenByInput>
  }

  export type MoveUpdateManyWithWhereWithoutChosenByInput = {
    where: MoveScalarWhereInput
    data: XOR<MoveUpdateManyMutationInput, MoveUncheckedUpdateManyWithoutChosenByInput>
  }

  export type MoveScalarWhereInput = {
    AND?: MoveScalarWhereInput | MoveScalarWhereInput[]
    OR?: MoveScalarWhereInput[]
    NOT?: MoveScalarWhereInput | MoveScalarWhereInput[]
    id?: StringFilter<"Move"> | string
    matchId?: StringFilter<"Move"> | string
    moveNumber?: IntFilter<"Move"> | number
    chosenByUserId?: StringFilter<"Move"> | string
    number?: IntFilter<"Move"> | number
    createdAt?: DateTimeFilter<"Move"> | Date | string
  }

  export type UserStatsUpsertWithoutUserInput = {
    update: XOR<UserStatsUpdateWithoutUserInput, UserStatsUncheckedUpdateWithoutUserInput>
    create: XOR<UserStatsCreateWithoutUserInput, UserStatsUncheckedCreateWithoutUserInput>
    where?: UserStatsWhereInput
  }

  export type UserStatsUpdateToOneWithWhereWithoutUserInput = {
    where?: UserStatsWhereInput
    data: XOR<UserStatsUpdateWithoutUserInput, UserStatsUncheckedUpdateWithoutUserInput>
  }

  export type UserStatsUpdateWithoutUserInput = {
    totalMatches?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    winStreak?: IntFieldUpdateOperationsInput | number
    bestWinStreak?: IntFieldUpdateOperationsInput | number
    lastMatchAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserStatsUncheckedUpdateWithoutUserInput = {
    totalMatches?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    winStreak?: IntFieldUpdateOperationsInput | number
    bestWinStreak?: IntFieldUpdateOperationsInput | number
    lastMatchAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    displayName?: string | null
    image?: string | null
    avatarUrl?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastOnlineAt?: Date | string | null
    otpCodes?: EmailOtpCreateNestedManyWithoutUserInput
    requestedFriendships?: FriendshipCreateNestedManyWithoutRequesterInput
    receivedFriendships?: FriendshipCreateNestedManyWithoutAddresseeInput
    matchesAsPlayer1?: MatchCreateNestedManyWithoutPlayer1Input
    matchesAsPlayer2?: MatchCreateNestedManyWithoutPlayer2Input
    matchesAsCurrentTurn?: MatchCreateNestedManyWithoutCurrentTurnUserInput
    matchesWon?: MatchCreateNestedManyWithoutWinnerUserInput
    boards?: BoardCreateNestedManyWithoutUserInput
    moves?: MoveCreateNestedManyWithoutChosenByInput
    userStats?: UserStatsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    displayName?: string | null
    image?: string | null
    avatarUrl?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastOnlineAt?: Date | string | null
    otpCodes?: EmailOtpUncheckedCreateNestedManyWithoutUserInput
    requestedFriendships?: FriendshipUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendships?: FriendshipUncheckedCreateNestedManyWithoutAddresseeInput
    matchesAsPlayer1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    matchesAsPlayer2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
    matchesAsCurrentTurn?: MatchUncheckedCreateNestedManyWithoutCurrentTurnUserInput
    matchesWon?: MatchUncheckedCreateNestedManyWithoutWinnerUserInput
    boards?: BoardUncheckedCreateNestedManyWithoutUserInput
    moves?: MoveUncheckedCreateNestedManyWithoutChosenByInput
    userStats?: UserStatsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOnlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpCodes?: EmailOtpUpdateManyWithoutUserNestedInput
    requestedFriendships?: FriendshipUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: FriendshipUpdateManyWithoutAddresseeNestedInput
    matchesAsPlayer1?: MatchUpdateManyWithoutPlayer1NestedInput
    matchesAsPlayer2?: MatchUpdateManyWithoutPlayer2NestedInput
    matchesAsCurrentTurn?: MatchUpdateManyWithoutCurrentTurnUserNestedInput
    matchesWon?: MatchUpdateManyWithoutWinnerUserNestedInput
    boards?: BoardUpdateManyWithoutUserNestedInput
    moves?: MoveUpdateManyWithoutChosenByNestedInput
    userStats?: UserStatsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOnlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpCodes?: EmailOtpUncheckedUpdateManyWithoutUserNestedInput
    requestedFriendships?: FriendshipUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: FriendshipUncheckedUpdateManyWithoutAddresseeNestedInput
    matchesAsPlayer1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    matchesAsPlayer2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
    matchesAsCurrentTurn?: MatchUncheckedUpdateManyWithoutCurrentTurnUserNestedInput
    matchesWon?: MatchUncheckedUpdateManyWithoutWinnerUserNestedInput
    boards?: BoardUncheckedUpdateManyWithoutUserNestedInput
    moves?: MoveUncheckedUpdateManyWithoutChosenByNestedInput
    userStats?: UserStatsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutOtpCodesInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    displayName?: string | null
    image?: string | null
    avatarUrl?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastOnlineAt?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    requestedFriendships?: FriendshipCreateNestedManyWithoutRequesterInput
    receivedFriendships?: FriendshipCreateNestedManyWithoutAddresseeInput
    matchesAsPlayer1?: MatchCreateNestedManyWithoutPlayer1Input
    matchesAsPlayer2?: MatchCreateNestedManyWithoutPlayer2Input
    matchesAsCurrentTurn?: MatchCreateNestedManyWithoutCurrentTurnUserInput
    matchesWon?: MatchCreateNestedManyWithoutWinnerUserInput
    boards?: BoardCreateNestedManyWithoutUserInput
    moves?: MoveCreateNestedManyWithoutChosenByInput
    userStats?: UserStatsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOtpCodesInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    displayName?: string | null
    image?: string | null
    avatarUrl?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastOnlineAt?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    requestedFriendships?: FriendshipUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendships?: FriendshipUncheckedCreateNestedManyWithoutAddresseeInput
    matchesAsPlayer1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    matchesAsPlayer2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
    matchesAsCurrentTurn?: MatchUncheckedCreateNestedManyWithoutCurrentTurnUserInput
    matchesWon?: MatchUncheckedCreateNestedManyWithoutWinnerUserInput
    boards?: BoardUncheckedCreateNestedManyWithoutUserInput
    moves?: MoveUncheckedCreateNestedManyWithoutChosenByInput
    userStats?: UserStatsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOtpCodesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOtpCodesInput, UserUncheckedCreateWithoutOtpCodesInput>
  }

  export type UserUpsertWithoutOtpCodesInput = {
    update: XOR<UserUpdateWithoutOtpCodesInput, UserUncheckedUpdateWithoutOtpCodesInput>
    create: XOR<UserCreateWithoutOtpCodesInput, UserUncheckedCreateWithoutOtpCodesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOtpCodesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOtpCodesInput, UserUncheckedUpdateWithoutOtpCodesInput>
  }

  export type UserUpdateWithoutOtpCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOnlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    requestedFriendships?: FriendshipUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: FriendshipUpdateManyWithoutAddresseeNestedInput
    matchesAsPlayer1?: MatchUpdateManyWithoutPlayer1NestedInput
    matchesAsPlayer2?: MatchUpdateManyWithoutPlayer2NestedInput
    matchesAsCurrentTurn?: MatchUpdateManyWithoutCurrentTurnUserNestedInput
    matchesWon?: MatchUpdateManyWithoutWinnerUserNestedInput
    boards?: BoardUpdateManyWithoutUserNestedInput
    moves?: MoveUpdateManyWithoutChosenByNestedInput
    userStats?: UserStatsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOtpCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOnlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    requestedFriendships?: FriendshipUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: FriendshipUncheckedUpdateManyWithoutAddresseeNestedInput
    matchesAsPlayer1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    matchesAsPlayer2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
    matchesAsCurrentTurn?: MatchUncheckedUpdateManyWithoutCurrentTurnUserNestedInput
    matchesWon?: MatchUncheckedUpdateManyWithoutWinnerUserNestedInput
    boards?: BoardUncheckedUpdateManyWithoutUserNestedInput
    moves?: MoveUncheckedUpdateManyWithoutChosenByNestedInput
    userStats?: UserStatsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutRequestedFriendshipsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    displayName?: string | null
    image?: string | null
    avatarUrl?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastOnlineAt?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    otpCodes?: EmailOtpCreateNestedManyWithoutUserInput
    receivedFriendships?: FriendshipCreateNestedManyWithoutAddresseeInput
    matchesAsPlayer1?: MatchCreateNestedManyWithoutPlayer1Input
    matchesAsPlayer2?: MatchCreateNestedManyWithoutPlayer2Input
    matchesAsCurrentTurn?: MatchCreateNestedManyWithoutCurrentTurnUserInput
    matchesWon?: MatchCreateNestedManyWithoutWinnerUserInput
    boards?: BoardCreateNestedManyWithoutUserInput
    moves?: MoveCreateNestedManyWithoutChosenByInput
    userStats?: UserStatsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRequestedFriendshipsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    displayName?: string | null
    image?: string | null
    avatarUrl?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastOnlineAt?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    otpCodes?: EmailOtpUncheckedCreateNestedManyWithoutUserInput
    receivedFriendships?: FriendshipUncheckedCreateNestedManyWithoutAddresseeInput
    matchesAsPlayer1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    matchesAsPlayer2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
    matchesAsCurrentTurn?: MatchUncheckedCreateNestedManyWithoutCurrentTurnUserInput
    matchesWon?: MatchUncheckedCreateNestedManyWithoutWinnerUserInput
    boards?: BoardUncheckedCreateNestedManyWithoutUserInput
    moves?: MoveUncheckedCreateNestedManyWithoutChosenByInput
    userStats?: UserStatsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRequestedFriendshipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRequestedFriendshipsInput, UserUncheckedCreateWithoutRequestedFriendshipsInput>
  }

  export type UserCreateWithoutReceivedFriendshipsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    displayName?: string | null
    image?: string | null
    avatarUrl?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastOnlineAt?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    otpCodes?: EmailOtpCreateNestedManyWithoutUserInput
    requestedFriendships?: FriendshipCreateNestedManyWithoutRequesterInput
    matchesAsPlayer1?: MatchCreateNestedManyWithoutPlayer1Input
    matchesAsPlayer2?: MatchCreateNestedManyWithoutPlayer2Input
    matchesAsCurrentTurn?: MatchCreateNestedManyWithoutCurrentTurnUserInput
    matchesWon?: MatchCreateNestedManyWithoutWinnerUserInput
    boards?: BoardCreateNestedManyWithoutUserInput
    moves?: MoveCreateNestedManyWithoutChosenByInput
    userStats?: UserStatsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReceivedFriendshipsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    displayName?: string | null
    image?: string | null
    avatarUrl?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastOnlineAt?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    otpCodes?: EmailOtpUncheckedCreateNestedManyWithoutUserInput
    requestedFriendships?: FriendshipUncheckedCreateNestedManyWithoutRequesterInput
    matchesAsPlayer1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    matchesAsPlayer2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
    matchesAsCurrentTurn?: MatchUncheckedCreateNestedManyWithoutCurrentTurnUserInput
    matchesWon?: MatchUncheckedCreateNestedManyWithoutWinnerUserInput
    boards?: BoardUncheckedCreateNestedManyWithoutUserInput
    moves?: MoveUncheckedCreateNestedManyWithoutChosenByInput
    userStats?: UserStatsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceivedFriendshipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedFriendshipsInput, UserUncheckedCreateWithoutReceivedFriendshipsInput>
  }

  export type UserUpsertWithoutRequestedFriendshipsInput = {
    update: XOR<UserUpdateWithoutRequestedFriendshipsInput, UserUncheckedUpdateWithoutRequestedFriendshipsInput>
    create: XOR<UserCreateWithoutRequestedFriendshipsInput, UserUncheckedCreateWithoutRequestedFriendshipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRequestedFriendshipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRequestedFriendshipsInput, UserUncheckedUpdateWithoutRequestedFriendshipsInput>
  }

  export type UserUpdateWithoutRequestedFriendshipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOnlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    otpCodes?: EmailOtpUpdateManyWithoutUserNestedInput
    receivedFriendships?: FriendshipUpdateManyWithoutAddresseeNestedInput
    matchesAsPlayer1?: MatchUpdateManyWithoutPlayer1NestedInput
    matchesAsPlayer2?: MatchUpdateManyWithoutPlayer2NestedInput
    matchesAsCurrentTurn?: MatchUpdateManyWithoutCurrentTurnUserNestedInput
    matchesWon?: MatchUpdateManyWithoutWinnerUserNestedInput
    boards?: BoardUpdateManyWithoutUserNestedInput
    moves?: MoveUpdateManyWithoutChosenByNestedInput
    userStats?: UserStatsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRequestedFriendshipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOnlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    otpCodes?: EmailOtpUncheckedUpdateManyWithoutUserNestedInput
    receivedFriendships?: FriendshipUncheckedUpdateManyWithoutAddresseeNestedInput
    matchesAsPlayer1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    matchesAsPlayer2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
    matchesAsCurrentTurn?: MatchUncheckedUpdateManyWithoutCurrentTurnUserNestedInput
    matchesWon?: MatchUncheckedUpdateManyWithoutWinnerUserNestedInput
    boards?: BoardUncheckedUpdateManyWithoutUserNestedInput
    moves?: MoveUncheckedUpdateManyWithoutChosenByNestedInput
    userStats?: UserStatsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUpsertWithoutReceivedFriendshipsInput = {
    update: XOR<UserUpdateWithoutReceivedFriendshipsInput, UserUncheckedUpdateWithoutReceivedFriendshipsInput>
    create: XOR<UserCreateWithoutReceivedFriendshipsInput, UserUncheckedCreateWithoutReceivedFriendshipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedFriendshipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedFriendshipsInput, UserUncheckedUpdateWithoutReceivedFriendshipsInput>
  }

  export type UserUpdateWithoutReceivedFriendshipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOnlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    otpCodes?: EmailOtpUpdateManyWithoutUserNestedInput
    requestedFriendships?: FriendshipUpdateManyWithoutRequesterNestedInput
    matchesAsPlayer1?: MatchUpdateManyWithoutPlayer1NestedInput
    matchesAsPlayer2?: MatchUpdateManyWithoutPlayer2NestedInput
    matchesAsCurrentTurn?: MatchUpdateManyWithoutCurrentTurnUserNestedInput
    matchesWon?: MatchUpdateManyWithoutWinnerUserNestedInput
    boards?: BoardUpdateManyWithoutUserNestedInput
    moves?: MoveUpdateManyWithoutChosenByNestedInput
    userStats?: UserStatsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedFriendshipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOnlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    otpCodes?: EmailOtpUncheckedUpdateManyWithoutUserNestedInput
    requestedFriendships?: FriendshipUncheckedUpdateManyWithoutRequesterNestedInput
    matchesAsPlayer1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    matchesAsPlayer2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
    matchesAsCurrentTurn?: MatchUncheckedUpdateManyWithoutCurrentTurnUserNestedInput
    matchesWon?: MatchUncheckedUpdateManyWithoutWinnerUserNestedInput
    boards?: BoardUncheckedUpdateManyWithoutUserNestedInput
    moves?: MoveUncheckedUpdateManyWithoutChosenByNestedInput
    userStats?: UserStatsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutMatchesAsPlayer1Input = {
    id?: string
    email: string
    passwordHash: string
    name: string
    displayName?: string | null
    image?: string | null
    avatarUrl?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastOnlineAt?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    otpCodes?: EmailOtpCreateNestedManyWithoutUserInput
    requestedFriendships?: FriendshipCreateNestedManyWithoutRequesterInput
    receivedFriendships?: FriendshipCreateNestedManyWithoutAddresseeInput
    matchesAsPlayer2?: MatchCreateNestedManyWithoutPlayer2Input
    matchesAsCurrentTurn?: MatchCreateNestedManyWithoutCurrentTurnUserInput
    matchesWon?: MatchCreateNestedManyWithoutWinnerUserInput
    boards?: BoardCreateNestedManyWithoutUserInput
    moves?: MoveCreateNestedManyWithoutChosenByInput
    userStats?: UserStatsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMatchesAsPlayer1Input = {
    id?: string
    email: string
    passwordHash: string
    name: string
    displayName?: string | null
    image?: string | null
    avatarUrl?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastOnlineAt?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    otpCodes?: EmailOtpUncheckedCreateNestedManyWithoutUserInput
    requestedFriendships?: FriendshipUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendships?: FriendshipUncheckedCreateNestedManyWithoutAddresseeInput
    matchesAsPlayer2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
    matchesAsCurrentTurn?: MatchUncheckedCreateNestedManyWithoutCurrentTurnUserInput
    matchesWon?: MatchUncheckedCreateNestedManyWithoutWinnerUserInput
    boards?: BoardUncheckedCreateNestedManyWithoutUserInput
    moves?: MoveUncheckedCreateNestedManyWithoutChosenByInput
    userStats?: UserStatsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMatchesAsPlayer1Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchesAsPlayer1Input, UserUncheckedCreateWithoutMatchesAsPlayer1Input>
  }

  export type UserCreateWithoutMatchesAsPlayer2Input = {
    id?: string
    email: string
    passwordHash: string
    name: string
    displayName?: string | null
    image?: string | null
    avatarUrl?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastOnlineAt?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    otpCodes?: EmailOtpCreateNestedManyWithoutUserInput
    requestedFriendships?: FriendshipCreateNestedManyWithoutRequesterInput
    receivedFriendships?: FriendshipCreateNestedManyWithoutAddresseeInput
    matchesAsPlayer1?: MatchCreateNestedManyWithoutPlayer1Input
    matchesAsCurrentTurn?: MatchCreateNestedManyWithoutCurrentTurnUserInput
    matchesWon?: MatchCreateNestedManyWithoutWinnerUserInput
    boards?: BoardCreateNestedManyWithoutUserInput
    moves?: MoveCreateNestedManyWithoutChosenByInput
    userStats?: UserStatsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMatchesAsPlayer2Input = {
    id?: string
    email: string
    passwordHash: string
    name: string
    displayName?: string | null
    image?: string | null
    avatarUrl?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastOnlineAt?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    otpCodes?: EmailOtpUncheckedCreateNestedManyWithoutUserInput
    requestedFriendships?: FriendshipUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendships?: FriendshipUncheckedCreateNestedManyWithoutAddresseeInput
    matchesAsPlayer1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    matchesAsCurrentTurn?: MatchUncheckedCreateNestedManyWithoutCurrentTurnUserInput
    matchesWon?: MatchUncheckedCreateNestedManyWithoutWinnerUserInput
    boards?: BoardUncheckedCreateNestedManyWithoutUserInput
    moves?: MoveUncheckedCreateNestedManyWithoutChosenByInput
    userStats?: UserStatsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMatchesAsPlayer2Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchesAsPlayer2Input, UserUncheckedCreateWithoutMatchesAsPlayer2Input>
  }

  export type UserCreateWithoutMatchesAsCurrentTurnInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    displayName?: string | null
    image?: string | null
    avatarUrl?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastOnlineAt?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    otpCodes?: EmailOtpCreateNestedManyWithoutUserInput
    requestedFriendships?: FriendshipCreateNestedManyWithoutRequesterInput
    receivedFriendships?: FriendshipCreateNestedManyWithoutAddresseeInput
    matchesAsPlayer1?: MatchCreateNestedManyWithoutPlayer1Input
    matchesAsPlayer2?: MatchCreateNestedManyWithoutPlayer2Input
    matchesWon?: MatchCreateNestedManyWithoutWinnerUserInput
    boards?: BoardCreateNestedManyWithoutUserInput
    moves?: MoveCreateNestedManyWithoutChosenByInput
    userStats?: UserStatsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMatchesAsCurrentTurnInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    displayName?: string | null
    image?: string | null
    avatarUrl?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastOnlineAt?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    otpCodes?: EmailOtpUncheckedCreateNestedManyWithoutUserInput
    requestedFriendships?: FriendshipUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendships?: FriendshipUncheckedCreateNestedManyWithoutAddresseeInput
    matchesAsPlayer1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    matchesAsPlayer2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
    matchesWon?: MatchUncheckedCreateNestedManyWithoutWinnerUserInput
    boards?: BoardUncheckedCreateNestedManyWithoutUserInput
    moves?: MoveUncheckedCreateNestedManyWithoutChosenByInput
    userStats?: UserStatsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMatchesAsCurrentTurnInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchesAsCurrentTurnInput, UserUncheckedCreateWithoutMatchesAsCurrentTurnInput>
  }

  export type UserCreateWithoutMatchesWonInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    displayName?: string | null
    image?: string | null
    avatarUrl?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastOnlineAt?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    otpCodes?: EmailOtpCreateNestedManyWithoutUserInput
    requestedFriendships?: FriendshipCreateNestedManyWithoutRequesterInput
    receivedFriendships?: FriendshipCreateNestedManyWithoutAddresseeInput
    matchesAsPlayer1?: MatchCreateNestedManyWithoutPlayer1Input
    matchesAsPlayer2?: MatchCreateNestedManyWithoutPlayer2Input
    matchesAsCurrentTurn?: MatchCreateNestedManyWithoutCurrentTurnUserInput
    boards?: BoardCreateNestedManyWithoutUserInput
    moves?: MoveCreateNestedManyWithoutChosenByInput
    userStats?: UserStatsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMatchesWonInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    displayName?: string | null
    image?: string | null
    avatarUrl?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastOnlineAt?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    otpCodes?: EmailOtpUncheckedCreateNestedManyWithoutUserInput
    requestedFriendships?: FriendshipUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendships?: FriendshipUncheckedCreateNestedManyWithoutAddresseeInput
    matchesAsPlayer1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    matchesAsPlayer2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
    matchesAsCurrentTurn?: MatchUncheckedCreateNestedManyWithoutCurrentTurnUserInput
    boards?: BoardUncheckedCreateNestedManyWithoutUserInput
    moves?: MoveUncheckedCreateNestedManyWithoutChosenByInput
    userStats?: UserStatsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMatchesWonInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchesWonInput, UserUncheckedCreateWithoutMatchesWonInput>
  }

  export type BoardCreateWithoutMatchInput = {
    id?: string
    numbers?: BoardCreatenumbersInput | number[]
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBoardsInput
  }

  export type BoardUncheckedCreateWithoutMatchInput = {
    id?: string
    userId: string
    numbers?: BoardCreatenumbersInput | number[]
    createdAt?: Date | string
  }

  export type BoardCreateOrConnectWithoutMatchInput = {
    where: BoardWhereUniqueInput
    create: XOR<BoardCreateWithoutMatchInput, BoardUncheckedCreateWithoutMatchInput>
  }

  export type BoardCreateManyMatchInputEnvelope = {
    data: BoardCreateManyMatchInput | BoardCreateManyMatchInput[]
    skipDuplicates?: boolean
  }

  export type MoveCreateWithoutMatchInput = {
    id?: string
    moveNumber: number
    number: number
    createdAt?: Date | string
    chosenBy: UserCreateNestedOneWithoutMovesInput
  }

  export type MoveUncheckedCreateWithoutMatchInput = {
    id?: string
    moveNumber: number
    chosenByUserId: string
    number: number
    createdAt?: Date | string
  }

  export type MoveCreateOrConnectWithoutMatchInput = {
    where: MoveWhereUniqueInput
    create: XOR<MoveCreateWithoutMatchInput, MoveUncheckedCreateWithoutMatchInput>
  }

  export type MoveCreateManyMatchInputEnvelope = {
    data: MoveCreateManyMatchInput | MoveCreateManyMatchInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMatchesAsPlayer1Input = {
    update: XOR<UserUpdateWithoutMatchesAsPlayer1Input, UserUncheckedUpdateWithoutMatchesAsPlayer1Input>
    create: XOR<UserCreateWithoutMatchesAsPlayer1Input, UserUncheckedCreateWithoutMatchesAsPlayer1Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchesAsPlayer1Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchesAsPlayer1Input, UserUncheckedUpdateWithoutMatchesAsPlayer1Input>
  }

  export type UserUpdateWithoutMatchesAsPlayer1Input = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOnlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    otpCodes?: EmailOtpUpdateManyWithoutUserNestedInput
    requestedFriendships?: FriendshipUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: FriendshipUpdateManyWithoutAddresseeNestedInput
    matchesAsPlayer2?: MatchUpdateManyWithoutPlayer2NestedInput
    matchesAsCurrentTurn?: MatchUpdateManyWithoutCurrentTurnUserNestedInput
    matchesWon?: MatchUpdateManyWithoutWinnerUserNestedInput
    boards?: BoardUpdateManyWithoutUserNestedInput
    moves?: MoveUpdateManyWithoutChosenByNestedInput
    userStats?: UserStatsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMatchesAsPlayer1Input = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOnlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    otpCodes?: EmailOtpUncheckedUpdateManyWithoutUserNestedInput
    requestedFriendships?: FriendshipUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: FriendshipUncheckedUpdateManyWithoutAddresseeNestedInput
    matchesAsPlayer2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
    matchesAsCurrentTurn?: MatchUncheckedUpdateManyWithoutCurrentTurnUserNestedInput
    matchesWon?: MatchUncheckedUpdateManyWithoutWinnerUserNestedInput
    boards?: BoardUncheckedUpdateManyWithoutUserNestedInput
    moves?: MoveUncheckedUpdateManyWithoutChosenByNestedInput
    userStats?: UserStatsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUpsertWithoutMatchesAsPlayer2Input = {
    update: XOR<UserUpdateWithoutMatchesAsPlayer2Input, UserUncheckedUpdateWithoutMatchesAsPlayer2Input>
    create: XOR<UserCreateWithoutMatchesAsPlayer2Input, UserUncheckedCreateWithoutMatchesAsPlayer2Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchesAsPlayer2Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchesAsPlayer2Input, UserUncheckedUpdateWithoutMatchesAsPlayer2Input>
  }

  export type UserUpdateWithoutMatchesAsPlayer2Input = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOnlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    otpCodes?: EmailOtpUpdateManyWithoutUserNestedInput
    requestedFriendships?: FriendshipUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: FriendshipUpdateManyWithoutAddresseeNestedInput
    matchesAsPlayer1?: MatchUpdateManyWithoutPlayer1NestedInput
    matchesAsCurrentTurn?: MatchUpdateManyWithoutCurrentTurnUserNestedInput
    matchesWon?: MatchUpdateManyWithoutWinnerUserNestedInput
    boards?: BoardUpdateManyWithoutUserNestedInput
    moves?: MoveUpdateManyWithoutChosenByNestedInput
    userStats?: UserStatsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMatchesAsPlayer2Input = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOnlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    otpCodes?: EmailOtpUncheckedUpdateManyWithoutUserNestedInput
    requestedFriendships?: FriendshipUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: FriendshipUncheckedUpdateManyWithoutAddresseeNestedInput
    matchesAsPlayer1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    matchesAsCurrentTurn?: MatchUncheckedUpdateManyWithoutCurrentTurnUserNestedInput
    matchesWon?: MatchUncheckedUpdateManyWithoutWinnerUserNestedInput
    boards?: BoardUncheckedUpdateManyWithoutUserNestedInput
    moves?: MoveUncheckedUpdateManyWithoutChosenByNestedInput
    userStats?: UserStatsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUpsertWithoutMatchesAsCurrentTurnInput = {
    update: XOR<UserUpdateWithoutMatchesAsCurrentTurnInput, UserUncheckedUpdateWithoutMatchesAsCurrentTurnInput>
    create: XOR<UserCreateWithoutMatchesAsCurrentTurnInput, UserUncheckedCreateWithoutMatchesAsCurrentTurnInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchesAsCurrentTurnInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchesAsCurrentTurnInput, UserUncheckedUpdateWithoutMatchesAsCurrentTurnInput>
  }

  export type UserUpdateWithoutMatchesAsCurrentTurnInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOnlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    otpCodes?: EmailOtpUpdateManyWithoutUserNestedInput
    requestedFriendships?: FriendshipUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: FriendshipUpdateManyWithoutAddresseeNestedInput
    matchesAsPlayer1?: MatchUpdateManyWithoutPlayer1NestedInput
    matchesAsPlayer2?: MatchUpdateManyWithoutPlayer2NestedInput
    matchesWon?: MatchUpdateManyWithoutWinnerUserNestedInput
    boards?: BoardUpdateManyWithoutUserNestedInput
    moves?: MoveUpdateManyWithoutChosenByNestedInput
    userStats?: UserStatsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMatchesAsCurrentTurnInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOnlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    otpCodes?: EmailOtpUncheckedUpdateManyWithoutUserNestedInput
    requestedFriendships?: FriendshipUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: FriendshipUncheckedUpdateManyWithoutAddresseeNestedInput
    matchesAsPlayer1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    matchesAsPlayer2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
    matchesWon?: MatchUncheckedUpdateManyWithoutWinnerUserNestedInput
    boards?: BoardUncheckedUpdateManyWithoutUserNestedInput
    moves?: MoveUncheckedUpdateManyWithoutChosenByNestedInput
    userStats?: UserStatsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUpsertWithoutMatchesWonInput = {
    update: XOR<UserUpdateWithoutMatchesWonInput, UserUncheckedUpdateWithoutMatchesWonInput>
    create: XOR<UserCreateWithoutMatchesWonInput, UserUncheckedCreateWithoutMatchesWonInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchesWonInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchesWonInput, UserUncheckedUpdateWithoutMatchesWonInput>
  }

  export type UserUpdateWithoutMatchesWonInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOnlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    otpCodes?: EmailOtpUpdateManyWithoutUserNestedInput
    requestedFriendships?: FriendshipUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: FriendshipUpdateManyWithoutAddresseeNestedInput
    matchesAsPlayer1?: MatchUpdateManyWithoutPlayer1NestedInput
    matchesAsPlayer2?: MatchUpdateManyWithoutPlayer2NestedInput
    matchesAsCurrentTurn?: MatchUpdateManyWithoutCurrentTurnUserNestedInput
    boards?: BoardUpdateManyWithoutUserNestedInput
    moves?: MoveUpdateManyWithoutChosenByNestedInput
    userStats?: UserStatsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMatchesWonInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOnlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    otpCodes?: EmailOtpUncheckedUpdateManyWithoutUserNestedInput
    requestedFriendships?: FriendshipUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: FriendshipUncheckedUpdateManyWithoutAddresseeNestedInput
    matchesAsPlayer1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    matchesAsPlayer2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
    matchesAsCurrentTurn?: MatchUncheckedUpdateManyWithoutCurrentTurnUserNestedInput
    boards?: BoardUncheckedUpdateManyWithoutUserNestedInput
    moves?: MoveUncheckedUpdateManyWithoutChosenByNestedInput
    userStats?: UserStatsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type BoardUpsertWithWhereUniqueWithoutMatchInput = {
    where: BoardWhereUniqueInput
    update: XOR<BoardUpdateWithoutMatchInput, BoardUncheckedUpdateWithoutMatchInput>
    create: XOR<BoardCreateWithoutMatchInput, BoardUncheckedCreateWithoutMatchInput>
  }

  export type BoardUpdateWithWhereUniqueWithoutMatchInput = {
    where: BoardWhereUniqueInput
    data: XOR<BoardUpdateWithoutMatchInput, BoardUncheckedUpdateWithoutMatchInput>
  }

  export type BoardUpdateManyWithWhereWithoutMatchInput = {
    where: BoardScalarWhereInput
    data: XOR<BoardUpdateManyMutationInput, BoardUncheckedUpdateManyWithoutMatchInput>
  }

  export type MoveUpsertWithWhereUniqueWithoutMatchInput = {
    where: MoveWhereUniqueInput
    update: XOR<MoveUpdateWithoutMatchInput, MoveUncheckedUpdateWithoutMatchInput>
    create: XOR<MoveCreateWithoutMatchInput, MoveUncheckedCreateWithoutMatchInput>
  }

  export type MoveUpdateWithWhereUniqueWithoutMatchInput = {
    where: MoveWhereUniqueInput
    data: XOR<MoveUpdateWithoutMatchInput, MoveUncheckedUpdateWithoutMatchInput>
  }

  export type MoveUpdateManyWithWhereWithoutMatchInput = {
    where: MoveScalarWhereInput
    data: XOR<MoveUpdateManyMutationInput, MoveUncheckedUpdateManyWithoutMatchInput>
  }

  export type MatchCreateWithoutBoardsInput = {
    id?: string
    status?: $Enums.MatchStatus
    createdAt?: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    player1: UserCreateNestedOneWithoutMatchesAsPlayer1Input
    player2: UserCreateNestedOneWithoutMatchesAsPlayer2Input
    currentTurnUser?: UserCreateNestedOneWithoutMatchesAsCurrentTurnInput
    winnerUser?: UserCreateNestedOneWithoutMatchesWonInput
    moves?: MoveCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutBoardsInput = {
    id?: string
    player1Id: string
    player2Id: string
    status?: $Enums.MatchStatus
    currentTurnUserId?: string | null
    winnerUserId?: string | null
    createdAt?: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    moves?: MoveUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutBoardsInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutBoardsInput, MatchUncheckedCreateWithoutBoardsInput>
  }

  export type UserCreateWithoutBoardsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    displayName?: string | null
    image?: string | null
    avatarUrl?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastOnlineAt?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    otpCodes?: EmailOtpCreateNestedManyWithoutUserInput
    requestedFriendships?: FriendshipCreateNestedManyWithoutRequesterInput
    receivedFriendships?: FriendshipCreateNestedManyWithoutAddresseeInput
    matchesAsPlayer1?: MatchCreateNestedManyWithoutPlayer1Input
    matchesAsPlayer2?: MatchCreateNestedManyWithoutPlayer2Input
    matchesAsCurrentTurn?: MatchCreateNestedManyWithoutCurrentTurnUserInput
    matchesWon?: MatchCreateNestedManyWithoutWinnerUserInput
    moves?: MoveCreateNestedManyWithoutChosenByInput
    userStats?: UserStatsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBoardsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    displayName?: string | null
    image?: string | null
    avatarUrl?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastOnlineAt?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    otpCodes?: EmailOtpUncheckedCreateNestedManyWithoutUserInput
    requestedFriendships?: FriendshipUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendships?: FriendshipUncheckedCreateNestedManyWithoutAddresseeInput
    matchesAsPlayer1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    matchesAsPlayer2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
    matchesAsCurrentTurn?: MatchUncheckedCreateNestedManyWithoutCurrentTurnUserInput
    matchesWon?: MatchUncheckedCreateNestedManyWithoutWinnerUserInput
    moves?: MoveUncheckedCreateNestedManyWithoutChosenByInput
    userStats?: UserStatsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBoardsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBoardsInput, UserUncheckedCreateWithoutBoardsInput>
  }

  export type MatchUpsertWithoutBoardsInput = {
    update: XOR<MatchUpdateWithoutBoardsInput, MatchUncheckedUpdateWithoutBoardsInput>
    create: XOR<MatchCreateWithoutBoardsInput, MatchUncheckedCreateWithoutBoardsInput>
    where?: MatchWhereInput
  }

  export type MatchUpdateToOneWithWhereWithoutBoardsInput = {
    where?: MatchWhereInput
    data: XOR<MatchUpdateWithoutBoardsInput, MatchUncheckedUpdateWithoutBoardsInput>
  }

  export type MatchUpdateWithoutBoardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    player1?: UserUpdateOneRequiredWithoutMatchesAsPlayer1NestedInput
    player2?: UserUpdateOneRequiredWithoutMatchesAsPlayer2NestedInput
    currentTurnUser?: UserUpdateOneWithoutMatchesAsCurrentTurnNestedInput
    winnerUser?: UserUpdateOneWithoutMatchesWonNestedInput
    moves?: MoveUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutBoardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    player2Id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    currentTurnUserId?: NullableStringFieldUpdateOperationsInput | string | null
    winnerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    moves?: MoveUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type UserUpsertWithoutBoardsInput = {
    update: XOR<UserUpdateWithoutBoardsInput, UserUncheckedUpdateWithoutBoardsInput>
    create: XOR<UserCreateWithoutBoardsInput, UserUncheckedCreateWithoutBoardsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBoardsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBoardsInput, UserUncheckedUpdateWithoutBoardsInput>
  }

  export type UserUpdateWithoutBoardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOnlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    otpCodes?: EmailOtpUpdateManyWithoutUserNestedInput
    requestedFriendships?: FriendshipUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: FriendshipUpdateManyWithoutAddresseeNestedInput
    matchesAsPlayer1?: MatchUpdateManyWithoutPlayer1NestedInput
    matchesAsPlayer2?: MatchUpdateManyWithoutPlayer2NestedInput
    matchesAsCurrentTurn?: MatchUpdateManyWithoutCurrentTurnUserNestedInput
    matchesWon?: MatchUpdateManyWithoutWinnerUserNestedInput
    moves?: MoveUpdateManyWithoutChosenByNestedInput
    userStats?: UserStatsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBoardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOnlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    otpCodes?: EmailOtpUncheckedUpdateManyWithoutUserNestedInput
    requestedFriendships?: FriendshipUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: FriendshipUncheckedUpdateManyWithoutAddresseeNestedInput
    matchesAsPlayer1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    matchesAsPlayer2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
    matchesAsCurrentTurn?: MatchUncheckedUpdateManyWithoutCurrentTurnUserNestedInput
    matchesWon?: MatchUncheckedUpdateManyWithoutWinnerUserNestedInput
    moves?: MoveUncheckedUpdateManyWithoutChosenByNestedInput
    userStats?: UserStatsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type MatchCreateWithoutMovesInput = {
    id?: string
    status?: $Enums.MatchStatus
    createdAt?: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    player1: UserCreateNestedOneWithoutMatchesAsPlayer1Input
    player2: UserCreateNestedOneWithoutMatchesAsPlayer2Input
    currentTurnUser?: UserCreateNestedOneWithoutMatchesAsCurrentTurnInput
    winnerUser?: UserCreateNestedOneWithoutMatchesWonInput
    boards?: BoardCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutMovesInput = {
    id?: string
    player1Id: string
    player2Id: string
    status?: $Enums.MatchStatus
    currentTurnUserId?: string | null
    winnerUserId?: string | null
    createdAt?: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    boards?: BoardUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutMovesInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutMovesInput, MatchUncheckedCreateWithoutMovesInput>
  }

  export type UserCreateWithoutMovesInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    displayName?: string | null
    image?: string | null
    avatarUrl?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastOnlineAt?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    otpCodes?: EmailOtpCreateNestedManyWithoutUserInput
    requestedFriendships?: FriendshipCreateNestedManyWithoutRequesterInput
    receivedFriendships?: FriendshipCreateNestedManyWithoutAddresseeInput
    matchesAsPlayer1?: MatchCreateNestedManyWithoutPlayer1Input
    matchesAsPlayer2?: MatchCreateNestedManyWithoutPlayer2Input
    matchesAsCurrentTurn?: MatchCreateNestedManyWithoutCurrentTurnUserInput
    matchesWon?: MatchCreateNestedManyWithoutWinnerUserInput
    boards?: BoardCreateNestedManyWithoutUserInput
    userStats?: UserStatsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMovesInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    displayName?: string | null
    image?: string | null
    avatarUrl?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastOnlineAt?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    otpCodes?: EmailOtpUncheckedCreateNestedManyWithoutUserInput
    requestedFriendships?: FriendshipUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendships?: FriendshipUncheckedCreateNestedManyWithoutAddresseeInput
    matchesAsPlayer1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    matchesAsPlayer2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
    matchesAsCurrentTurn?: MatchUncheckedCreateNestedManyWithoutCurrentTurnUserInput
    matchesWon?: MatchUncheckedCreateNestedManyWithoutWinnerUserInput
    boards?: BoardUncheckedCreateNestedManyWithoutUserInput
    userStats?: UserStatsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMovesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMovesInput, UserUncheckedCreateWithoutMovesInput>
  }

  export type MatchUpsertWithoutMovesInput = {
    update: XOR<MatchUpdateWithoutMovesInput, MatchUncheckedUpdateWithoutMovesInput>
    create: XOR<MatchCreateWithoutMovesInput, MatchUncheckedCreateWithoutMovesInput>
    where?: MatchWhereInput
  }

  export type MatchUpdateToOneWithWhereWithoutMovesInput = {
    where?: MatchWhereInput
    data: XOR<MatchUpdateWithoutMovesInput, MatchUncheckedUpdateWithoutMovesInput>
  }

  export type MatchUpdateWithoutMovesInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    player1?: UserUpdateOneRequiredWithoutMatchesAsPlayer1NestedInput
    player2?: UserUpdateOneRequiredWithoutMatchesAsPlayer2NestedInput
    currentTurnUser?: UserUpdateOneWithoutMatchesAsCurrentTurnNestedInput
    winnerUser?: UserUpdateOneWithoutMatchesWonNestedInput
    boards?: BoardUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutMovesInput = {
    id?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    player2Id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    currentTurnUserId?: NullableStringFieldUpdateOperationsInput | string | null
    winnerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boards?: BoardUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type UserUpsertWithoutMovesInput = {
    update: XOR<UserUpdateWithoutMovesInput, UserUncheckedUpdateWithoutMovesInput>
    create: XOR<UserCreateWithoutMovesInput, UserUncheckedCreateWithoutMovesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMovesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMovesInput, UserUncheckedUpdateWithoutMovesInput>
  }

  export type UserUpdateWithoutMovesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOnlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    otpCodes?: EmailOtpUpdateManyWithoutUserNestedInput
    requestedFriendships?: FriendshipUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: FriendshipUpdateManyWithoutAddresseeNestedInput
    matchesAsPlayer1?: MatchUpdateManyWithoutPlayer1NestedInput
    matchesAsPlayer2?: MatchUpdateManyWithoutPlayer2NestedInput
    matchesAsCurrentTurn?: MatchUpdateManyWithoutCurrentTurnUserNestedInput
    matchesWon?: MatchUpdateManyWithoutWinnerUserNestedInput
    boards?: BoardUpdateManyWithoutUserNestedInput
    userStats?: UserStatsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMovesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOnlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    otpCodes?: EmailOtpUncheckedUpdateManyWithoutUserNestedInput
    requestedFriendships?: FriendshipUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: FriendshipUncheckedUpdateManyWithoutAddresseeNestedInput
    matchesAsPlayer1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    matchesAsPlayer2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
    matchesAsCurrentTurn?: MatchUncheckedUpdateManyWithoutCurrentTurnUserNestedInput
    matchesWon?: MatchUncheckedUpdateManyWithoutWinnerUserNestedInput
    boards?: BoardUncheckedUpdateManyWithoutUserNestedInput
    userStats?: UserStatsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutUserStatsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    displayName?: string | null
    image?: string | null
    avatarUrl?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastOnlineAt?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    otpCodes?: EmailOtpCreateNestedManyWithoutUserInput
    requestedFriendships?: FriendshipCreateNestedManyWithoutRequesterInput
    receivedFriendships?: FriendshipCreateNestedManyWithoutAddresseeInput
    matchesAsPlayer1?: MatchCreateNestedManyWithoutPlayer1Input
    matchesAsPlayer2?: MatchCreateNestedManyWithoutPlayer2Input
    matchesAsCurrentTurn?: MatchCreateNestedManyWithoutCurrentTurnUserInput
    matchesWon?: MatchCreateNestedManyWithoutWinnerUserInput
    boards?: BoardCreateNestedManyWithoutUserInput
    moves?: MoveCreateNestedManyWithoutChosenByInput
  }

  export type UserUncheckedCreateWithoutUserStatsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    displayName?: string | null
    image?: string | null
    avatarUrl?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastOnlineAt?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    otpCodes?: EmailOtpUncheckedCreateNestedManyWithoutUserInput
    requestedFriendships?: FriendshipUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendships?: FriendshipUncheckedCreateNestedManyWithoutAddresseeInput
    matchesAsPlayer1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    matchesAsPlayer2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
    matchesAsCurrentTurn?: MatchUncheckedCreateNestedManyWithoutCurrentTurnUserInput
    matchesWon?: MatchUncheckedCreateNestedManyWithoutWinnerUserInput
    boards?: BoardUncheckedCreateNestedManyWithoutUserInput
    moves?: MoveUncheckedCreateNestedManyWithoutChosenByInput
  }

  export type UserCreateOrConnectWithoutUserStatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserStatsInput, UserUncheckedCreateWithoutUserStatsInput>
  }

  export type UserUpsertWithoutUserStatsInput = {
    update: XOR<UserUpdateWithoutUserStatsInput, UserUncheckedUpdateWithoutUserStatsInput>
    create: XOR<UserCreateWithoutUserStatsInput, UserUncheckedCreateWithoutUserStatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserStatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserStatsInput, UserUncheckedUpdateWithoutUserStatsInput>
  }

  export type UserUpdateWithoutUserStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOnlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    otpCodes?: EmailOtpUpdateManyWithoutUserNestedInput
    requestedFriendships?: FriendshipUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: FriendshipUpdateManyWithoutAddresseeNestedInput
    matchesAsPlayer1?: MatchUpdateManyWithoutPlayer1NestedInput
    matchesAsPlayer2?: MatchUpdateManyWithoutPlayer2NestedInput
    matchesAsCurrentTurn?: MatchUpdateManyWithoutCurrentTurnUserNestedInput
    matchesWon?: MatchUpdateManyWithoutWinnerUserNestedInput
    boards?: BoardUpdateManyWithoutUserNestedInput
    moves?: MoveUpdateManyWithoutChosenByNestedInput
  }

  export type UserUncheckedUpdateWithoutUserStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOnlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    otpCodes?: EmailOtpUncheckedUpdateManyWithoutUserNestedInput
    requestedFriendships?: FriendshipUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: FriendshipUncheckedUpdateManyWithoutAddresseeNestedInput
    matchesAsPlayer1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    matchesAsPlayer2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
    matchesAsCurrentTurn?: MatchUncheckedUpdateManyWithoutCurrentTurnUserNestedInput
    matchesWon?: MatchUncheckedUpdateManyWithoutWinnerUserNestedInput
    boards?: BoardUncheckedUpdateManyWithoutUserNestedInput
    moves?: MoveUncheckedUpdateManyWithoutChosenByNestedInput
  }

  export type SessionCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type EmailOtpCreateManyUserInput = {
    id?: string
    codeHash: string
    purpose: string
    expiresAt: Date | string
    consumedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type FriendshipCreateManyRequesterInput = {
    id?: string
    addresseeId: string
    status?: $Enums.FriendshipStatus
    createdAt?: Date | string
  }

  export type FriendshipCreateManyAddresseeInput = {
    id?: string
    requesterId: string
    status?: $Enums.FriendshipStatus
    createdAt?: Date | string
  }

  export type MatchCreateManyPlayer1Input = {
    id?: string
    player2Id: string
    status?: $Enums.MatchStatus
    currentTurnUserId?: string | null
    winnerUserId?: string | null
    createdAt?: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
  }

  export type MatchCreateManyPlayer2Input = {
    id?: string
    player1Id: string
    status?: $Enums.MatchStatus
    currentTurnUserId?: string | null
    winnerUserId?: string | null
    createdAt?: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
  }

  export type MatchCreateManyCurrentTurnUserInput = {
    id?: string
    player1Id: string
    player2Id: string
    status?: $Enums.MatchStatus
    winnerUserId?: string | null
    createdAt?: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
  }

  export type MatchCreateManyWinnerUserInput = {
    id?: string
    player1Id: string
    player2Id: string
    status?: $Enums.MatchStatus
    currentTurnUserId?: string | null
    createdAt?: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
  }

  export type BoardCreateManyUserInput = {
    id?: string
    matchId: string
    numbers?: BoardCreatenumbersInput | number[]
    createdAt?: Date | string
  }

  export type MoveCreateManyChosenByInput = {
    id?: string
    matchId: string
    moveNumber: number
    number: number
    createdAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailOtpUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    codeHash?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailOtpUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    codeHash?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailOtpUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    codeHash?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUpdateWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addressee?: UserUpdateOneRequiredWithoutReceivedFriendshipsNestedInput
  }

  export type FriendshipUncheckedUpdateWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    addresseeId?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUncheckedUpdateManyWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    addresseeId?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUpdateWithoutAddresseeInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requester?: UserUpdateOneRequiredWithoutRequestedFriendshipsNestedInput
  }

  export type FriendshipUncheckedUpdateWithoutAddresseeInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUncheckedUpdateManyWithoutAddresseeInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpdateWithoutPlayer1Input = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    player2?: UserUpdateOneRequiredWithoutMatchesAsPlayer2NestedInput
    currentTurnUser?: UserUpdateOneWithoutMatchesAsCurrentTurnNestedInput
    winnerUser?: UserUpdateOneWithoutMatchesWonNestedInput
    boards?: BoardUpdateManyWithoutMatchNestedInput
    moves?: MoveUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutPlayer1Input = {
    id?: StringFieldUpdateOperationsInput | string
    player2Id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    currentTurnUserId?: NullableStringFieldUpdateOperationsInput | string | null
    winnerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boards?: BoardUncheckedUpdateManyWithoutMatchNestedInput
    moves?: MoveUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutPlayer1Input = {
    id?: StringFieldUpdateOperationsInput | string
    player2Id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    currentTurnUserId?: NullableStringFieldUpdateOperationsInput | string | null
    winnerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MatchUpdateWithoutPlayer2Input = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    player1?: UserUpdateOneRequiredWithoutMatchesAsPlayer1NestedInput
    currentTurnUser?: UserUpdateOneWithoutMatchesAsCurrentTurnNestedInput
    winnerUser?: UserUpdateOneWithoutMatchesWonNestedInput
    boards?: BoardUpdateManyWithoutMatchNestedInput
    moves?: MoveUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutPlayer2Input = {
    id?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    currentTurnUserId?: NullableStringFieldUpdateOperationsInput | string | null
    winnerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boards?: BoardUncheckedUpdateManyWithoutMatchNestedInput
    moves?: MoveUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutPlayer2Input = {
    id?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    currentTurnUserId?: NullableStringFieldUpdateOperationsInput | string | null
    winnerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MatchUpdateWithoutCurrentTurnUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    player1?: UserUpdateOneRequiredWithoutMatchesAsPlayer1NestedInput
    player2?: UserUpdateOneRequiredWithoutMatchesAsPlayer2NestedInput
    winnerUser?: UserUpdateOneWithoutMatchesWonNestedInput
    boards?: BoardUpdateManyWithoutMatchNestedInput
    moves?: MoveUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutCurrentTurnUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    player2Id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    winnerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boards?: BoardUncheckedUpdateManyWithoutMatchNestedInput
    moves?: MoveUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutCurrentTurnUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    player2Id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    winnerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MatchUpdateWithoutWinnerUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    player1?: UserUpdateOneRequiredWithoutMatchesAsPlayer1NestedInput
    player2?: UserUpdateOneRequiredWithoutMatchesAsPlayer2NestedInput
    currentTurnUser?: UserUpdateOneWithoutMatchesAsCurrentTurnNestedInput
    boards?: BoardUpdateManyWithoutMatchNestedInput
    moves?: MoveUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutWinnerUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    player2Id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    currentTurnUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boards?: BoardUncheckedUpdateManyWithoutMatchNestedInput
    moves?: MoveUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutWinnerUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    player2Id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    currentTurnUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BoardUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    numbers?: BoardUpdatenumbersInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    match?: MatchUpdateOneRequiredWithoutBoardsNestedInput
  }

  export type BoardUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    numbers?: BoardUpdatenumbersInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    numbers?: BoardUpdatenumbersInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoveUpdateWithoutChosenByInput = {
    id?: StringFieldUpdateOperationsInput | string
    moveNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    match?: MatchUpdateOneRequiredWithoutMovesNestedInput
  }

  export type MoveUncheckedUpdateWithoutChosenByInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    moveNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoveUncheckedUpdateManyWithoutChosenByInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    moveNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardCreateManyMatchInput = {
    id?: string
    userId: string
    numbers?: BoardCreatenumbersInput | number[]
    createdAt?: Date | string
  }

  export type MoveCreateManyMatchInput = {
    id?: string
    moveNumber: number
    chosenByUserId: string
    number: number
    createdAt?: Date | string
  }

  export type BoardUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    numbers?: BoardUpdatenumbersInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBoardsNestedInput
  }

  export type BoardUncheckedUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    numbers?: BoardUpdatenumbersInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardUncheckedUpdateManyWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    numbers?: BoardUpdatenumbersInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoveUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    moveNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chosenBy?: UserUpdateOneRequiredWithoutMovesNestedInput
  }

  export type MoveUncheckedUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    moveNumber?: IntFieldUpdateOperationsInput | number
    chosenByUserId?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoveUncheckedUpdateManyWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    moveNumber?: IntFieldUpdateOperationsInput | number
    chosenByUserId?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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