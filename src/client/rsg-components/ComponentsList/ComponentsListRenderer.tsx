import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import Link from 'rsg-components/Link';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';

const styles = ({ color, fontFamily, fontSize, space, mq }: Rsg.Theme) => ({
	list: {
		margin: 0,
		paddingLeft: space[2],
	},
	item: {
		color: color.base,
		display: 'block',
		margin: [[space[1], 0, space[1], 0]],
		fontFamily: fontFamily.base,
		fontSize: fontSize.base,
		listStyle: 'none',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
	},
	isChild: {
		[mq.small]: {
			display: 'inline-block',
			margin: [[0, space[1], 0, 0]],
		},
	},
	heading: {
		color: color.base,
		marginTop: space[1],
		fontFamily: fontFamily.base,
		fontWeight: 'bold',
	},
	isSelected: {
		fontWeight: 'bold',
	},
});

interface ComponentsListRendererProps extends JssInjectedProps {
	items: (Rsg.Component & { selected: boolean })[];
}

export const ComponentsListRenderer: React.FunctionComponent<ComponentsListRendererProps> = ({
	classes,
	items,
}) => {
	return (
		<ul className={classes.list}>
			{items.map(({ heading, visibleName, href, content, shouldOpenInNewTab, selected }) => {
				return (
					<li
						className={cx(classes.item, {
							[classes.isChild]: !content && !shouldOpenInNewTab,
							[classes.isSelected]: selected,
						})}
						key={href}
					>
						<Link
							className={cx(heading && classes.heading)}
							href={href}
							target={shouldOpenInNewTab ? '_blank' : undefined}
						>
							{visibleName}
						</Link>
						{content}
					</li>
				);
			})}
		</ul>
	);
};

ComponentsListRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	items: PropTypes.array.isRequired,
};

export default Styled<ComponentsListRendererProps>(styles)(ComponentsListRenderer);
