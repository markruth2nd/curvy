import { RangeControl, ToggleControl, HorizontalRule, ColorPalette } from '@wordpress/components';
import metadata from '../block.json';
import { __ } from '@wordpress/i18n';

export const BottomCurveSettings = (props) => {
	return (
        <>
        <HorizontalRule />
        <RangeControl
            min={100}
            max={300}
            value={props.attributes.bottomWidth || 100}
            onChange={(newValue) => {
                props.setAttributes({
                    bottomWidth: parseInt(newValue),
                });
            }}
            label={ __("Curve Width", metadata.textdomain)}
        />
        <RangeControl
            min={0}
            max={200}
            value={props.attributes.bottomHeight}
            onChange={(value) => {
                props.setAttributes({bottomHeight: value})
            }}
            label={ __("Curve Height", metadata.textdomain)}
        />
        <HorizontalRule />
        <div style={{display: "flex"}}>
            <ToggleControl 
            onChange={(isChecked) => {
                props.setAttributes({bottomFlipX: isChecked})
            }} 
            checked={props.attributes.bottomFlipX} />
            <span>{ __("Flip horizantally", metadata.textdomain)}</span>
        </div>
        <div style={{display: "flex"}}>
            <ToggleControl 
            onChange={(isChecked) => {
                props.setAttributes({bottomFlipY: isChecked})
            }} 
            checked={props.attributes.bottomFlipY} />
            <span>{ __("Flip vertically", metadata.textdomain)}</span>
        </div>
        <HorizontalRule />
        <div>
            <label>{ __("Curve Color", metadata.textdomain)}</label>
            <ColorPalette 
            colors={[
                {color: "#000000", name: __("Black", metadata.textdomain)},
                {color: "#ffffff", name: __("White", metadata.textdomain)},
                {color: "#ffff00", name: __("Yellow", metadata.textdomain)},
            ]}
            value={props.attributes.bottomColor} 
            onChange={(newValue) => {
                props.setAttributes({bottomColor: newValue})
            }} />
        </div>
        </>
	)
}

