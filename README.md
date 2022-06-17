# Classy: Basic Layout Classes
## Default Settings

Padding/Margin Sizes
- $size-1: 0.25rem;
- $size-2: 0.5rem;
- $size-3: 1rem;
- $size-4: 1.5rem;
- $size-5: 3rem;
- $size-6: 5rem;

Screen Sizes
- $xxlScreen : 1440px;
- $xlScreen : 1260px;
- $lgScreen : 1080px;
- $mlScreen : 900px;
- $mdScreen : 720px;
- $smScreen : 540px;
- $xsScreen : 360px;

## Width / Height
Width classes are build as so: 

**w-10-xl**

w: Width h: Height

10: Value -> 10%
 
xl: Screen size -> $xlScreen


Table of all possible values:

| Value | Code | Screen size  | 
|---|---|---|
| 0  |  0|xxl|   
|  5% |  5| xl|    
|  10% | 10| lg|   
|  15% | 15| ml|   
|   ...|...| md|   
|  100% | 100| sm|
| unset  |uns| xs|
| initial   |ini| --| 


### Examples: 
```css
.h-5-xxl

@media only screen and (max-width: $xxlScreen){
    height: 5% !important;
}
```
```css
.w-0-md
 
@media only screen and (max-width: $mdScreen){
    width: 0% !important;
}
```
```css
.w-10
 
width: 10%;

```
```css
.h-uns-ml

@media only screen and (max-width: $mlScreen){
    height: unset !important;
}
```


## Flex Box

