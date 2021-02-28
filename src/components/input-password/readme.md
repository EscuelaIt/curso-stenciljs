# tars-input-password



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute     | Description      | Type      | Default     |
| ------------------- | ------------- | ---------------- | --------- | ----------- |
| `inputName`         | `name`        |                  | `string`  | `''`        |
| `inputPlaceholder`  | `placeholder` | Set placeholder. | `string`  | `undefined` |
| `isPasswordVisible` | `visible`     |                  | `boolean` | `false`     |
| `value`             | `value`       |                  | `string`  | `undefined` |


## Events

| Event          | Description | Type                   |
| -------------- | ----------- | ---------------------- |
| `showPassword` |             | `CustomEvent<boolean>` |


## Methods

### `getValue() => Promise<boolean>`



#### Returns

Type: `Promise<boolean>`




## Dependencies

### Depends on

- [my-icon](../icon)

### Graph
```mermaid
graph TD;
  tars-input-password --> my-icon
  style tars-input-password fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
