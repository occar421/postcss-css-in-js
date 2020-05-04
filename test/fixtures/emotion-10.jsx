/* global render */
/** @jsx jsx */
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const SomeComponent = styled.div`
	display: flex;
	background-color: ${props => props.color};
`;

const YetAnotherComponent = styled.p(
	{
		backgroundColor: "black",
	}
);

const AnotherComponent = styled.h1(
	{
		color: "hotpink",
		[YetAnotherComponent]: {
			color: "white",
		},
	},
	props => ({ flex: props.flex })
);

render(
	<SomeComponent color="#DA70D6">
		<AnotherComponent flex={1}>
			<span css={css`
				color: sarahgreen;
			`}>
				Some text.
			</span>
			<span css={{
				color: "sarahgreen",
			}}>
				Some other text.
			</span>
			<YetAnotherComponent>Yet another text.</YetAnotherComponent>
		</AnotherComponent>
	</SomeComponent>
);
const app = document.getElementById("root");
const myStyle = css`
	color: rebeccapurple;
`;
app.classList.add(myStyle);

export default {
	SomeComponent,
	AnotherComponent,
};
