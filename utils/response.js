export const successResponse = (data, message = "Success" ) => ({
    status: 200,
    message,
    data,
    success: true,
    
});

export const errorResponse = (status = 400, message = "Bad Request") => ({
	success: false,
	status,
	message,
});
