import { collections, interfaces, registers /*, anchors*/ } from 'flow/modules';

// Implementation for derivation word-counts.flow.yaml#/collections/acmeCo~1word-counts/derivation.
export class AcmeCoFileSizes implements interfaces.AcmeCoFileSizes {
    fromDocumentsPublish(
        source: collections.AcmeCoFiles,
        _register: registers.AcmeCoFileSizes,
        _previous: registers.AcmeCoFileSizes,
    ): collections.AcmeCoFileSizes[] {
        return [{ filename: source._meta.file, size: source.body.length }];
    }
}
