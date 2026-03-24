import jwt from 'jsonwebtoken';
import { env } from '@/common/utils';
import { TokenPayload } from "./auth.types";

export const generateToken = (payload: TokenPayload): string => {

    return jwt.sign(payload, env.JWT_SECRET_KEY, { expiresIn: 30 })
}

export const verifyToken = (token: string): TokenPayload | null => {
    try {
        const decoded = jwt.verify(token, env.JWT_SECRET_KEY) as TokenPayload;
        return decoded;
    } catch (error) {
        throw new Error('Invalid token')
    }
}

export const extractToken = (authHeader?: string): string | null => {
    if (!authHeader?.startsWith('Bearer ')) return null;
    return authHeader.split(' ')[1] ?? null;
}

if (require.main === module) {

    const myPayload: TokenPayload = {
        id: '123',
        email: 'test@test.com',
        role: 'CLIENT'
    };

    const token = generateToken(myPayload);
    console.log('✅ Token généré:', token);

  // 3. On vérifie que l'extraction du header fonctionne aussi
  const fakeHeader = `Bearer ${token}`;
  const extracted = extractToken(fakeHeader);
  console.log('✅ Token extrait du header:', extracted);

  // 4. On vérifie le contenu du token
  const decoded = verifyToken(token);
  console.log('✅ Contenu décodé du payload:', decoded);
}