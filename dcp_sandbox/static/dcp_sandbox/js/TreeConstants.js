/**
 * Constants used in sandbox.js and Tree classes.
 */
function TreeConstants() {

}
// Minimum separation between siblings.
TreeConstants.MIN_SIB_SEP = 20;
// Minimum separation between cousins.
TreeConstants.MIN_COUS_SEP = 40;
// Minimum HORIZ_SEP between boxes
TreeConstants.HORIZ_SEP = 10;
// Minimum separation of boxes from edges
TreeConstants.EDGE_SEP = 10;
// Constants for computing the box width
TreeConstants.BOX_CONSTANT = 40;
TreeConstants.SHORT_NAME_CONSTANT = 10;
TreeConstants.FONT = "14px sans-serif";
// Constants for block height and space in between
TreeConstants.BOX_HEIGHT = 30;
TreeConstants.VERT_SEP = 20;
// Separation between the first block and the top of the svg element.
TreeConstants.EDGE_VERT_SEP = 20;
// Margin around curvature and sign symbols
TreeConstants.SYMBOL_MARGIN = TreeConstants.BOX_CONSTANT/12;
// Tree location
TreeConstants.TREE_DIV = "#chart";
// Location of images
TreeConstants.IMAGE_PREFIX = "/static/dcp_sandbox/images/";
// Key for tagToNode map in cookie
TreeConstants.TAG_TO_NODE = "tagToNode";
// Constants for reconstructing objective/constraint
TreeConstants.OPERATORS = ["+","-","*","/","<=",">=","=="];
TreeConstants.ELLIPSIS = "...";
// Initial prompt
TreeConstants.PROMPT = "Click here and type in an expression or inequality.";
TreeConstants.PROMPT_CONSTANT = 200;
// Demo objective
TreeConstants.DEMO = "log(square(z)) - log_sum_exp(2*x*z, -square(y), z) + (norm(x,3) + log(y))";