import { z } from "zod";

export const loginSchema = z.object({
    identifier: z.string()
        .min(1, "Nhập username hoặc email")
        .max(200),

    password: z.string()
        .min(8, "Mật khẩu bắt buộc"),
});

export type LoginInput = z.infer<typeof loginSchema>;