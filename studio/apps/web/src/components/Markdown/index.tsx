/* eslint-disable react/prop-types */
"use client";

import { useMemo } from "react";
import { ClassAttributes, HTMLAttributes } from "react";
import { JSX } from "react";
import ReactMarkdown, { Components, ExtraProps } from "react-markdown";
import {
  Box,
  Divider,
  Link,
  styled,
  type SxProps,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Theme,
} from "@mui/material";
import { mergeSx } from "merge-sx";
import NextLink from "next/link";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

import FadeInWord from "@/components/Markdown/components/FadeInWord";
import { wordWrap } from "@/components/Markdown/plugins/wordWrap";
import Typography from "@/components/Typography";

type ExtendedComponents = Components & {
  word?: (
    props: ClassAttributes<HTMLSpanElement> &
      HTMLAttributes<HTMLSpanElement> &
      ExtraProps,
  ) => JSX.Element;
};

// Remove incomplete HTML tags at the end of streaming markdown
const removeIncompleteHtmlTags = (
  markdown: string | null | undefined,
): string => {
  if (!markdown) return "";

  const lastOpenBracket = markdown.lastIndexOf("<");
  const lastCloseBracket = markdown.lastIndexOf(">");
  // If there's an opening bracket after the last closing bracket,
  // we have an incomplete tag - remove it
  if (lastOpenBracket > lastCloseBracket) {
    return markdown.substring(0, lastOpenBracket);
  }
  return markdown;
};

type MarkdownProps = {
  data: string | null | undefined;
  enableFadeInAnimation?: boolean;
  components?: ExtendedComponents;
  sx?: SxProps<Theme>;
};

function Markdown({
  data,
  enableFadeInAnimation = true,
  components,
  sx,
}: MarkdownProps) {
  const cleanedData = removeIncompleteHtmlTags(data);
  const mergedComponents: ExtendedComponents = useMemo(() => {
    return {
      table: (props) => {
        const { children } = props;
        return (
          <StyledTableContainer>
            <StyledTable>{children}</StyledTable>
          </StyledTableContainer>
        );
      },
      thead: (props) => {
        const { children } = props;
        return <TableHead>{children}</TableHead>;
      },
      tbody: (props) => {
        const { children } = props;
        return <TableBody>{children}</TableBody>;
      },
      tr: (props) => {
        const { children } = props;
        return <StyledTableRow>{children}</StyledTableRow>;
      },
      th: (props) => {
        const { children } = props;
        return <StyledTableCell>{children}</StyledTableCell>;
      },
      td: (props) => {
        const { children } = props;
        return <StyledTableCell>{children}</StyledTableCell>;
      },
      a: (props) => {
        const { href, children } = props;
        return (
          <Link
            component={NextLink}
            href={href ?? ""}
            target={href?.startsWith("http") ? "_blank" : "_self"}
            sx={{
              color: "accent.primary",
              textDecoration: "none",
              "&:hover": {
                color: "accent.primaryAlt",
              },
            }}
          >
            {children}
          </Link>
        );
      },
      h1: (props) => {
        const { children } = props;
        return (
          <Typography
            component="h1"
            variant="display1Em"
            color="content.emphasis"
            sx={{ marginY: "1em", textWrap: "balance" }}
          >
            {children}
          </Typography>
        );
      },
      h2: (props) => {
        const { children } = props;
        return (
          <Typography
            component="h2"
            variant="display2Em"
            color="content.emphasis"
            sx={{ marginY: "1em", textWrap: "balance" }}
          >
            {children}
          </Typography>
        );
      },
      h3: (props) => {
        const { children } = props;
        return (
          <Typography
            component="h3"
            variant="display3Em"
            color="content.emphasis"
            sx={{ marginY: "1em", textWrap: "balance" }}
          >
            {children}
          </Typography>
        );
      },
      h4: (props) => {
        const { children } = props;
        return (
          <Typography
            component="h4"
            color="content.emphasis"
            sx={{
              fontSize: "1.125rem",
              fontWeight: 700,
              marginY: "1em",
              textWrap: "balance",
            }}
          >
            {children}
          </Typography>
        );
      },
      h5: (props) => {
        const { children } = props;
        return (
          <Typography
            component="h5"
            color="content.emphasis"
            sx={{
              fontSize: "1rem",
              fontWeight: 700,
              marginY: "1em",
              textWrap: "balance",
            }}
          >
            {children}
          </Typography>
        );
      },
      h6: (props) => {
        const { children } = props;
        return (
          <Typography
            component="h6"
            color="content.emphasis"
            sx={{
              fontSize: "0.875rem",
              fontWeight: 700,
              marginY: "1em",
              textWrap: "balance",
            }}
          >
            {children}
          </Typography>
        );
      },
      hr: (props) => {
        const { children } = props;
        return (
          <Divider component="hr" sx={{ marginY: "1em" }}>
            {children}
          </Divider>
        );
      },
      b: (props) => {
        const { children } = props;
        return (
          <Typography component="b" color="content.emphasis">
            {children}
          </Typography>
        );
      },
      p: (props) => {
        const { children } = props;
        return (
          <Typography component="p" sx={{ marginY: "1em" }}>
            {children}
          </Typography>
        );
      },
      strong: (props) => {
        const { children } = props;
        return (
          <Typography
            component="strong"
            color="content.emphasis"
            sx={{ fontWeight: "500" }}
          >
            {children}
          </Typography>
        );
      },
      ul: (props) => {
        const { children } = props;
        return (
          <Box
            component="ul"
            sx={{
              listStyleType: "disc",
              listStylePosition: "outside",
              paddingLeft: "1rem",
            }}
          >
            {children}
          </Box>
        );
      },
      ol: (props) => {
        const { children } = props;
        return (
          <Box
            component="ol"
            sx={{
              paddingLeft: "1rem",
            }}
          >
            {children}
          </Box>
        );
      },
      li: (props) => {
        const { children } = props;
        return (
          <Box component="li" sx={{ marginY: "0.25rem" }}>
            {children}
          </Box>
        );
      },
      word: (props) => {
        const { children } = props;
        return <FadeInWord>{children}</FadeInWord>;
      },
      ...components,
    };
  }, [components]);

  return (
    <Box
      sx={mergeSx(
        (theme) => theme.typography.body2,
        {
          width: "100%",
        },
        sx,
      )}
    >
      <ReactMarkdown
        remarkPlugins={[
          remarkGfm,
          ...(enableFadeInAnimation ? [wordWrap] : []),
        ]}
        rehypePlugins={[rehypeRaw]}
        components={mergedComponents}
      >
        {cleanedData}
      </ReactMarkdown>
    </Box>
  );
}

const StyledTableContainer = styled(TableContainer)(() => ({
  marginBlockStart: "1rem",
  marginBlockEnd: "1rem",
}));

const StyledTable = styled(Table)(() => ({
  borderCollapse: "separate",
  borderSpacing: "0 0.25rem",
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  overflow: "hidden",
  color: theme.vars.palette.content.default,
  backgroundColor: "transparent",
  borderRadius: "0.0625rem",
  transition: "all 75ms ease-in-out",
  "&:nth-of-type(even)": {
    backgroundColor: theme.vars.palette.scrim[1],
  },
  "&:hover": {
    ...theme.vars.palette.background.noise.phantomSurfaceAlt,
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  border: 0,
  padding: "0.25rem 0.5rem",
  height: "2.5rem",
  [`&.${tableCellClasses.head}`]: {
    ...theme.typography.fine1,
    backgroundColor: theme.vars.palette.surface.default,
    color: theme.vars.palette.content.hint,
    border: "1px solid",
    borderColor: theme.vars.palette.surface.backdrop,
    borderRadius: "0.25rem",
    borderTop: 0,
    borderBottom: 0,
    "&:first-of-type": {
      borderRadius: "2.25rem 0.5rem 0.5rem 2.25rem",
      borderLeft: 0,
      marginRight: "1px",
    },
    "&:last-of-type": {
      borderRadius: "0.5rem 2.25rem 2.25rem 0.5rem",
      borderRight: 0,
    },
  },
  [`&.${tableCellClasses.body}`]: {
    ...theme.typography.headline2,
    "&:first-of-type": {
      borderTopLeftRadius: "0.625rem",
      borderBottomLeftRadius: "0.625rem",
    },
    "&:last-of-type": {
      borderTopRightRadius: "0.625rem",
      borderBottomRightRadius: "0.625rem",
    },
  },
}));

export default Markdown;
