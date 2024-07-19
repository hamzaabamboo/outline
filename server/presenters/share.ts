import { Share } from "@server/models";
import { presentUser } from ".";

export default function presentShare(share: Share, isAdmin = false) {
  const data = {
    id: share.id,
    documentId: share.documentId,
    documentTitle: share.document?.title,
    documentUrl: share.document?.url,
    documentSummary: share.document?.getSummary(),
    documentCreatedAt: share.document?.createdAt,
    collectionName: share.document?.collection?.name,
    published: share.published,
    url: share.canonicalUrl,
    urlId: share.urlId,
    createdBy: presentUser(share.user),
    includeChildDocuments: share.includeChildDocuments,
    lastAccessedAt: share.lastAccessedAt || undefined,
    views: share.views || 0,
    domain: share.domain,
    createdAt: share.createdAt,
    updatedAt: share.updatedAt,
  };

  if (!isAdmin) {
    delete data.lastAccessedAt;
    delete data.documentSummary;
    delete data.documentCreatedAt;
    delete data.collectionName;
  }

  return data;
}
