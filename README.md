# Button Plugin Documentation

##  Quantum Button
New generations buttons

## Table of contents
* [General info](#general-info)
* [Installation guide](#installation-guide)
* [Metadata](#metadata)
* [Dependencies](#dependencies)
* [Confluence document link](#confluence-document-link)
* [Versions](#versions)

## General info
This is a common Button plugin which is used across all GEP products.

## Installation guide
Use the library [pre-packaged](https://github.com/GEP-GitHub/nexxe.ng/tree/DEVELOPMENT/packages/components/button-lib)
"Latest Version": "3.1.19"

### Interface
```
import { IIconInjectorConfig } from '@nexxe/shared';

export class config {
	alignRight: boolean = false;
	ariaLabel: string;
	backgroundColor: string = '';
	buttonExpressionId?: any;
	callbackParams: any = {};
	disable: boolean = false;
	expressions?: any;
	flat: boolean = false;
	icon?: IIconInjectorConfig;
	image: any[] = [];
	isFloating: boolean = false;
	isLarge: boolean = false;
	isLink: boolean = false;
	isSmall: boolean = false;
	styleClass?: string = '';
	title: string = '';
	tooltip?: string;
	whiteSecondaryBtn?: boolean = false;
	shortcuts?: Array<IKeyboardShortcut>;
	clickEvent?: {
		eventId: string,
		eventName: string
	}
	attachedConfig?: any;
}

export type IAccessibleShortcutEvents = 'click' | 'scrollIntoView';

export interface IKeyboardShortcut {
	scid: IAccessibleShortcutEvents,
	modifierKeys: Array<string>,
	key: string;
}
```

## Metadata
Add the plugin metadata in your project metadata file
```
{
  "nexxe.button": {
    "importAs": "@nexxe/button",
    "versions": {
      "3.1.19": {
        "id": "nexxe.button@3.1.19",
        "path": "assets/plugins/packages/components/button/3.1.19/",
        "assetsKey": "button_assets",
        "deps": {
          "nexxe.shared": {
            "version": "latest",
            "order": "0"
          },
          "nexxe.plugin-injector": {
            "version": "latest",
            "order": "1"
          },
          "nexxe.core": {
            "version": "latest",
            "order": "2"
          },
          "nexxe.core-types": {
            "version": "latest",
            "order": "3"
          }
        }
      }
    }
  }
}
```

## Dependencies
```
{
	"@nexxe/shared": "0.0.0-next.5",
  "@nexxe/core": "0.0.1-alpha.15",
  "@nexxe/core-types": "0.0.1-alpha.23",
  '@nexxe/plugin-injector': '0.0.1-alpha.7',
  "@nexxe/core-vendors": "0.0.6",
  "moment": { redirect: "@nexxe/core-vendors", version: "0.0.6" },
  "lodash": { redirect: "@nexxe/core-vendors", version: "0.0.6" },
  "immutable": { redirect: "@nexxe/core-vendors", version: "0.0.6" },
  "@nexxe/event-manager": "latest",
  "@nexxe/rpc": "latest",
  "@nexxe/cds": "latest",
  "@nexxe/metadata-manager": "latest",
}
```

## Confluence document link
https://smartbygep.atlassian.net/wiki/spaces/NEXXEFRONTEND/pages/3318841372/NEXXE+Button

## Versions

### Version: 3.1.19
>* Ticket: GBFORM-120
>* Added attachedConfig in the interface of the button plugin
>* Author name: <irina.marginean@gep.com>

### Version: 3.1.18
>* Ticket: GBFORM-1329
>* WCAG Enhancement: 
  1. Outlines/borders must appear only when user focuses on the element using keyboard.
  2. When user focuses on the element using mouse, outlines/borderd must not appear.
>* Solution:
  1. Use focus-visible instead of focus in all regions.
  2. In button plugin, focus-visible has been used instead of focus wherever code for outlines or borders are executed.
>* Author name: <aakash.padhy@gep.com>

### Version: 3.0.17
>* GBFORM-1612
>* when it is disabled for btn-secondary, I removed the outline
>* Author  name: <raul.aruncutean@gep.com>

### Version: 3.0.16
>* GBFORM-1422
>* Modified z-index for the alert message element ("visually-hidden" class). It was overlapping the action buttons in 
  screen designer.

## Version: 3.0.0-next.15
>* Ticket: CLI-360951
>* Enhancement: Announcing shortcut keys at the beginning of each section for user convenience.
>* Solution:
  1. Registration of all shortcut messages to our accessibility service through tabbableTitle/Blocktitle. Changes are implemented in button and shared(accessibility.service.ts).
  2. Creation of an announcement element within the layer, containing the list of all the shortcuts. Changes are implemented in shared(accessibility.service.ts).
  3. Integration of the reference to the announcement element into the widget sections. Changes are implemented in nexgen-widget-manager(item.component.html).
>* Author  name: <aakash.padhy@gep.com>
